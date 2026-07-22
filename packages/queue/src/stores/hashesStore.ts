
import { RedisClientType } from "redis";
export function HashesStoreConfig(redisClient: RedisClientType) {
    return {
        set,
        get,
        deleteByKey,
        expire
    }


    async function set<T extends Record<string, string>>(key: string, msg: T) {
        return redisClient.hSet(key, msg);
    }

    async function get<T extends Record<string, string>>(key: string): Promise<T | null> {
        const msg = await redisClient.hGetAll(key);
        if (Object.keys(msg).length === 0) {
            return null;
        }

        return msg as T;
    }

    async function deleteByKey(key: string) {
        return redisClient.del(key);
    }

    async function expire(key: string, seconds: number) {
        return redisClient.expire(key, seconds);
    }
}