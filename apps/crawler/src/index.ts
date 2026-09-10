import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config";
import { createRedisConnection } from "@repo/redis/client/client";
import { crawlConsumerConfig } from "@repo/redis/streams/consumers/crawlConsumer";
import { createConsumerGroup } from "@repo/redis/client/createConsumerGroup";
import { urlDeDuplication } from "@repo/redis/stores/deduplication/urlDeDuplication";
import { fetchWebPageAndNetworkInfo } from "@/fetchWebPageAndNetworkInfo.js";
import { crawlPublisherConfig } from "@repo/redis/streams/publishers/crawlPublisher";
import { connectDB } from "@repo/db/index";
import os from "os"
import { randomBytes } from "crypto";

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

async function main() {
  while (true) {
    const message = await crawlConsumer.consume();
    if (!message || message.length === 0 || !message[0]?.message) {
      continue;
    }
    const msg = message[0].message;

    console.log("Message Received", msg);


  }
}

await main();


