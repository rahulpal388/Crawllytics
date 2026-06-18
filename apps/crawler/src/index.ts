import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config"
import { createRedisConnection } from "@repo/queue/client/client";
import { crawlConsumerConfig } from "@repo/queue/streams/consumers/crawlConsumer";
import { createConsumerGroup } from "@repo/queue/client/createConsumerGroup";



const env = validateEnv();

export const redisClient = await createRedisConnection({
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME
})

await createConsumerGroup({
    redisClient,
    key: "crawl_stream",
    group: "crawl_stream_group"
});

const crawlConsumer = crawlConsumerConfig(redisClient, "worker-1");



async function main() {

    while (true) {
        const message = await crawlConsumer.consume();

        if (message) {
            console.log("Message Received : ", message);
        }
    }

}






await main();
