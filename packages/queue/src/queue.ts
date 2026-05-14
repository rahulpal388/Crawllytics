import { createClient, RedisClientType } from 'redis';

type RedisConfigType = {
    url: string;
    password: string;
    username: string;
}



export async function createRedisConnection(redisConfig: RedisConfigType
): Promise<ReturnType<typeof createClient>> {

    console.log(redisConfig)
    const client = await createClient({
        url: redisConfig.url,
        password: redisConfig.password,
        username: redisConfig.username,
    }).on("error", (err) => {
        console.error(`Error Connecting To Redis Server : ${err.message}`)
        process.exit();
    }).connect()



    console.log("Redis Server is connected")

    return client;
}   