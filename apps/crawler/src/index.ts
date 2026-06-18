import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config"
import { createRedisConnection } from "@repo/queue/client/client";
import { crawlConsumerConfig } from "@repo/queue/streams/consumers/crawlConsumer";



const env = validateEnv();

export const redisClient = await createRedisConnection({
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME
})

const crawlConsumer = crawlConsumerConfig(redisClient, "worker-1");



async function main() {

    while (true) {
        const message = await crawlConsumer.consume();
    }

}






await main();
