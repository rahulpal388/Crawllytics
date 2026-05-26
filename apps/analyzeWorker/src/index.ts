import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config";
import { createRedisConnection } from "@repo/queue/queue";
import { consumer } from "@repo/queue/streams";
import { connectDB } from "@repo/db/index";
import { getGatherInformation } from "@repo/db/utils/getGatherInformation";

const env = validateEnv();

async function main() {
    const redisClient = await createRedisConnection({
        url: env.REDIS_URL,
        password: env.REDIS_PASSWORD,
        username: env.REDIS_USERNAME,
    });

    await connectDB(env.DATABASE_URL);

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
        const id = messages[0]?.id;
        const messageId = messages[0]?.message.id;
        if (!id || !messageId) {
            continue;
        }
        console.log(`Consumed message with id: ${id}`);
        console.log(`messageId: ${messageId}`);
        const data = await getGatherInformation(messageId);
        console.dir(data, { depth: null });


        lastId = id || "$";



    }

}


main();