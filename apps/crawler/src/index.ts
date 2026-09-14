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


    //  gather the domain information
    const isGatheredDomainInfo = await crawlInfoStore.isGatheredDomainInfo(msg.projectId);

    if (!isGatheredDomainInfo) {
      // TODO : get the domain information and store in DB
      // TODO : update the crawl store to set isGatheredDomainInfo to true
    }

    // TODO : fech the url
    const url = normalizeURL(msg.url);
    if (!url) {
      console.error(`Invalid URL: ${msg.url}`);
      continue;
    }
    const fetchResult = await fetchPageAndNetworkInfo(url, [], new Set(), false);

    if (!fetchResult.success) {
      console.error(`Failed to fetch page and network info for URL: ${url.href}`);
      console.error("Network info:", fetchResult.data.eachUrlNetwork.fetchError);

      // TODO : add the netowrk info to DB and rest gather info to null
      continue;
    }

    console.log(`Successfully fetched page and network info for URL: ${url.href}`);

    console.dir(fetchResult.data.eachUrlNetwork, { depth: null });
    // TODO : gather information from fetched HTML


    // TODO : Add the url to the stream after checking the condition
    // TODO : after adding the url update the crawl store

    // TODO : Put the gather information to the DB

    // TODO : Acknowledege the redis on completion of the task

    await crawlConsumer.ack(messageId);
  }
}

await main();


