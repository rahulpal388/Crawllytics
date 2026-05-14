import { consumer } from "@/consumer.js";
import { crawler } from "@/crawler.js";
import { validateEnv } from "@/utils/validateEnv.js";
import { createRedisConnection } from "@repo/queue/queue";
import "dotenv/config"



validateEnv();

export const redisClient = await createRedisConnection({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    username: process.env.REDIS_USERNAME
})


async function main() {
    let lastId = "$"

    while (true) {
        const res = await consumer({ key: "crawl:url", id: lastId });

        if (!res) {
            continue;
        }

        lastId = res.messages[0]?.id || "$";
        const url = res.messages[0]?.message.url
        if (url) {
            crawler(new URL(url));
        }

    }
}




main();