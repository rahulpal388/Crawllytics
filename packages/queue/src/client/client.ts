import { RedisConfigType } from '../types/redisConfigTypes.js';
import { createClient, RedisClientType } from 'redis';
import { logger } from "@repo/lib/logger"


export async function createRedisConnection(redisConfig: RedisConfigType
): Promise<RedisClientType> {

    const client = await createClient({
        url: redisConfig.url,
        password: redisConfig.password,
        username: redisConfig.username,

    }).on("error", (err) => {
        logger.error({
            message: "Redis connection failed",
            path: "",
            metaData: {
                url: redisConfig.url,
                username: redisConfig.username
            }
        })
        process.exit(1);
    }).connect()



    console.log("Redis Server is connected")

    return client as RedisClientType;
}   