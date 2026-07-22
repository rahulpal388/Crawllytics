import { RedisClientType } from "redis";


export function sortedSetStoreConfig(redisClient: RedisClientType) {
    return {
        add,
        removeByScore,
        count,
        getOldestScore,
        expire,
        deleteByKey,
    }


    async function add(key: string, score: number, member: string) {
        return redisClient.zAdd(key, { score, value: member });
    }

    async function count(key: string) {
        return redisClient.zCard(key);
    }

    async function getOldestScore(key: string) {
        return redisClient.zRangeWithScores(key, 0, 0);
    }

    async function removeByScore(key: string, min: number, max: number) {
        return redisClient.zRemRangeByScore(key, min, max);
    }

    async function expire(key: string, seconds: number) {
        return redisClient.expire(key, seconds);
    }

    async function deleteByKey(key: string) {
        return redisClient.del(key);
    }

}