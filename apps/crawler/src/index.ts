import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config";
import { createRedisConnection } from "@repo/redis/client/client";
import { crawlConsumerConfig } from "@repo/redis/streams/consumers/crawlConsumer";
import { createConsumerGroup } from "@repo/redis/client/createConsumerGroup";
import { urlDeDuplication } from "@repo/redis/stores/deduplication/urlDeDuplication";
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

export const urlDeDuplicateStore = urlDeDuplication(redisClient);
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
    console.log(`Received message with ID: ${messageId} and content`);
    console.log("Message Received", msg);


    const url = normalizeURL(msg.url);
    if (!url) {
      console.error(`Invalid URL: ${msg.url}`);
      continue;
    }


    // fech the url
    const fetchResult = await fetchPageAndNetworkInfo(url, [], new Set(), false);

    if (!fetchResult.success) {
      console.error(`Failed to fetch page and network info for URL: ${url.href}`);
      console.error("Network info:", fetchResult.data.eachUrlNetwork.fetchError);

      // TODO : add the netowrk info to DB and rest gather info to null
      continue;
    }


    console.log(`Successfully fetched page and network info for URL: ${url.href}`);

    // console.dir(fetchResult.data.eachUrlNetwork, { depth: null });

    // TODO : gather information from fetched HTML
    const gatheredInfo = await getGatherInformation(fetchResult.data.html, url, msg.limit.currValue);

    // console.dir(gatheredInfo, { depth: null });


    //  gather the domain information
    const isGatheredDomainInfo = await crawlInfoStore.isGatheredDomainInfo(msg.projectId);

    if (!isGatheredDomainInfo) {
      // TODO : get the domain information and store in DB
      // TODO : update the crawl store to set isGatheredDomainInfo to true
      const domainInfo = await getDomainInfo(url.hostname);
      const ipAddress = fetchResult.data.eachUrlNetwork.ipAddress;
      const serverLocation = ipAddress ? await getLocationByIP(ipAddress) : null;
      const webSiteInformation: WebsiteInformationType = {
        websiteName: gatheredInfo.htmlHeader.sitename,
        domain: url.hostname,
        ipAddress,
        webServer: fetchResult.data.eachUrlNetwork.responseHeaders?.server ?? null,
        serverLocation,
        favicons: gatheredInfo.htmlHeader.favicon.map((f) => f.href),
        languages: gatheredInfo.htmlHeader.alternate
          .map((alt) => alt.hreflang)
          .filter((hreflang): hreflang is string => hreflang !== null),
        // TODO : robotTxt adn siteMapXML are null fix it
        robotsTxt: null,
        siteMapXml: null,
      }
      console.dir(domainInfo, { depth: null });
      console.dir(webSiteInformation, { depth: null });
    }


    // TODO : Add the url to the stream after checking the condition
    // TODO : after adding the url update the crawl store

    // TODO : Put the gather information to the DB

    // TODO : Acknowledege the redis on completion of the task

    await crawlConsumer.ack(messageId);
  }
}

await main();


