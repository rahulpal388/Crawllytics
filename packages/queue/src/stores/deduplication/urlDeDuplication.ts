import { RedisClientType } from "redis";




export function urlDeDuplication(redisClient: RedisClientType) {

    return {
        add,
        isMember,
        remove,
        generateKey
    }

    async function add(key: string, value: string[]) {
        return await redisClient.sAdd(key, value);
    }

    async function isMember(key: string, value: string) {
        const response = await redisClient.sIsMember(key, value);
        return response == 1;
    }

    async function remove(key: string) {
        return await redisClient.del(key);
    }

    function generateKey(seedUrlId: string) {
        return `urlDeDuplication:${seedUrlId}`;
    }

}