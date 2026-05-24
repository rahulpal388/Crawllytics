import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config";
import { createRedisConnection } from "@repo/queue/queue";
import { consumer } from "@repo/queue/streams";

validateEnv();

async function main() {
    const redisClient = await createRedisConnection({
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
        username: process.env.REDIS_USERNAME,
    });

    let lastId = "$";

    while (true) {

        const consume = await consumer({
            redisClient,
            key: "analyze:url",
            id: lastId
        })

        if (!consume) {
            continue;
        }

        const { messages } = consume;
        for (const message of messages) {
            const { id, message: msg } = message;
            console.log(`Received message with id: ${id} and data: ${JSON.stringify(msg)}`);
            lastId = id;
        }

    }

}


main();