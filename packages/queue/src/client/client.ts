import { RedisConfigType } from '../types/redisConfigTypes.js';
import { createClient, RedisClientType } from 'redis';



export async function createRedisConnection(redisConfig: RedisConfigType
): Promise<RedisClientType> {

    const client = await createClient({
        url: redisConfig.url,
        password: redisConfig.password,
        username: redisConfig.username,

    }).on("error", (err) => {
        console.error(`Error Connecting To Redis Server : ${err.message}`)
        process.exit(1);
    }).connect()



    console.log("Redis Server is connected")

    return client as RedisClientType;
}   