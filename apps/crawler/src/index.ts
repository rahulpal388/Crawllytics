import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config";
import { createRedisConnection } from "@repo/redis/client/client";
import { crawlConsumerConfig } from "@repo/redis/streams/consumers/crawlConsumer";
import { createConsumerGroup } from "@repo/redis/client/createConsumerGroup";
import { crawlPublisherConfig } from "@repo/redis/streams/publishers/crawlPublisher";
import { connectDB } from "@repo/db/index";
import os from "os"
import { randomBytes } from "crypto";
import { crawlInfoStoreConfig } from "@repo/redis/stores/crawl-store/crawlInfoStore";
import { fetchPageAndNetworkInfo } from "@/fetchWebPageAndNetworkInfo.js";
import { normalizeURL } from "@/lib/normalizeUrl.js";
import { getGatherInformation } from "@/gatherInformation.js";
import fs from "node:fs/promises"
import { getDomainInfo } from "@/lib/getDomainInfo.js";
import { WebsiteInformationType } from "@repo/contracts/types/crawl/domain-leve-information/websiteInformation.Types";
import { getLocationByIP } from "@repo/lib/location/getLocationByIP";
import { urlCrawledRepository } from "@repo/db/repository/urlCrawledRepository";
import { projectRepository } from "@repo/db/repository/projectRepository";
import mongoose from "mongoose";
import { addUrlToStream } from "@/lib/addUrlToStream.js";
import { urlDuplicationStoreConfig } from "@repo/redis/stores/urlDuplication";



const env = validateEnv();

// ##################################################
// DB connection setup
// ##################################################
const dbConnect = await connectDB(env.DATABASE_URL);
if (!dbConnect) {
  console.error("Failed to connect to the database. Exiting...");
  process.exit(1);
}

// ##################################################
// Redis connection and stream setup
// ##################################################

export const redisClient = await createRedisConnection({
  url: env.REDIS_URL,
  password: env.REDIS_PASSWORD,
  username: env.REDIS_USERNAME,
});

await createConsumerGroup({
  redisClient,
  key: "crawl_stream",
  group: "crawl_stream_group",
});


const consumerClient = `${os.hostname}${randomBytes(12).toString("hex")}`

console.log(`consumer client name ${consumerClient}`)
const crawlConsumer = crawlConsumerConfig(redisClient, consumerClient);

export const urlDuplicateStore = new urlDuplicationStoreConfig(redisClient);
export const crawlPublisher = crawlPublisherConfig(redisClient);
export const crawlInfoStore = new crawlInfoStoreConfig(redisClient);



async function main() {
  while (true) {
    const message = await crawlConsumer.consume();
    if (!message || message.length === 0 || !message[0]?.message) {
      continue;
    }
    const msg = message[0].message;
    const messageId = message[0].id;
    console.log("messge received: ", msg)

    try {


      const url = normalizeURL(msg.url);
      if (!url) {
        throw new Error(`Invalid URL: ${msg.url}`);
        continue;
      }


      /*
      * Fetch the page and network information for the given URL.
      */
      const fetchResult = await fetchPageAndNetworkInfo(url, [], new Set(), false);


      /*
      * If the fetch was not successful : 
        1. Only put the network information in DB and rest to null
      */

      if (!fetchResult.success) {

        /*
        * add the netowrk info to DB and rest gather info to null
        */

        await urlCrawledRepository.addUrlCrawled({
          projectId: new mongoose.Types.ObjectId(msg.projectId),
          url: msg.url,
          networkInfo: fetchResult.data.eachUrlNetwork,
          htmlHeader: null,
          htmlHeadingContent: null,
          links: [],
          media: null,
          structureData: null,
          mobileUIUX: null,
          urlAnalyses: null,
          performanceSignals: null,
          htmlDocument: null,
          accessibility: null
        })

        continue;
      }

      /*
      * Gather the information from the fetched HTML
      */
      const gatheredInfo = await getGatherInformation(fetchResult.data.html, url, msg.limit.currValue);



      /*
      * Check domain and website info is already gathered for the URL or not, if not gather the domain information and store in DB
      */
      const isGatheredDomainInfo = await crawlInfoStore.isGatheredDomainInfo(msg.projectId);

      if (!isGatheredDomainInfo) {
        /*
        * get the domain information and store in DB
        */
        const domainInfo = await getDomainInfo(url.hostname);
        const ipAddress = fetchResult.data.eachUrlNetwork.ipAddress;
        const serverLocation = ipAddress ? await getLocationByIP(ipAddress) : null;


        /*
        *  update the crawl store to set isGatheredDomainInfo to true
        */
        const webSiteInformation: WebsiteInformationType = {
          websiteName: gatheredInfo.htmlHeader.sitename,
          domain: url.hostname,
          ipAddress,
          webServer: fetchResult.data.eachUrlNetwork.responseHeaders?.server ?? null,
          serverLocation,
          favicons: gatheredInfo.htmlHeader.favicon.map((f) => f.href),
          languages: gatheredInfo.htmlHeader.alternate
            .map((alt) => alt.hreflang)
            .filter((hreflang): hreflang is string => hreflang !== null)
        }

        /*
        * put the domain and website info in DB
        * and update the crawl store to set isGatheredDomainInfo to true
        */
        await projectRepository.updateDomainAndWebsiteInfo(
          new mongoose.Types.ObjectId(msg.projectId),
          domainInfo,
          webSiteInformation
        );

        await crawlInfoStore.updateIsGatheredDomainInfo(msg.projectId, true);

      }


      /*
      * Add the url to the stream after checking the condition
      * After adding the urls to the stream, update the totalUrls in the crawlInfoStore
      */
      await addUrlToStream(gatheredInfo.internalLinks, msg);


      /*
      *  Put the gather information to the DB
      */

      await urlCrawledRepository.addUrlCrawled({
        projectId: new mongoose.Types.ObjectId(msg.projectId),
        url: msg.url,
        networkInfo: fetchResult.data.eachUrlNetwork,
        htmlHeader: gatheredInfo.htmlHeader,
        htmlHeadingContent: gatheredInfo.htmlHeadingContent,
        links: gatheredInfo.links,
        media: gatheredInfo.media,
        structureData: gatheredInfo.structureData,
        mobileUIUX: gatheredInfo.mobileUIUX,
        urlAnalyses: gatheredInfo.urlAnalyses,
        performanceSignals: gatheredInfo.performanceSignals,
        htmlDocument: gatheredInfo.htmlDocument,
        accessibility: gatheredInfo.accessibility
      })

      /*
      * Acknowledege the redis on completion of the task
      */
      await crawlConsumer.ack(messageId);
      await crawlInfoStore.updateCrawledUrls(msg.projectId, 1);

      /*
      * Check does crawlUrl === totalUrl if yes, delete the urlDuplcation
      */
      console.log("Crawed : ", url.href)
      const crawlStore = await crawlInfoStore.get(msg.projectId)
      if (crawlStore && (crawlStore.linkInfo.totalUrl === crawlStore.linkInfo.crawledUrl)) {
        await urlDuplicateStore.remove(msg.projectId);
        console.log("Completed Crawl for ", url.hostname)
      }

    } catch (error) {
      console.error(`Error processing message with ID: ${messageId}`, error);
    }
  }
}

await main();


