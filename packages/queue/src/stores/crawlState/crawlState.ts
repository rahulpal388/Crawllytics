import { CrawlStateType } from '../../types/crawlStateTypes.js';
import { RedisClientType } from "redis";
import { Types } from "mongoose";

export function crawlStateStore(redisClient: RedisClientType) {

    return {
        add,
        get,
        generateKey,
        isComplete,
        incDiscoveredUrls,
        incCrawledUrls,
        incFailedUrls,
        setStatus,
        remove
    }

    async function add(key: string, state: CrawlStateType) {

        return await redisClient.hSet(key, {
            ...state,
            discoveredUrls: state.discoveredUrls.toString(),
            maxDepth: state.maxDepth.toString(),
            crawledUrls: state.crawledUrls.toString(),
            failedUrls: state.failedUrls.toString(),
            robotsTxt: JSON.stringify(state.robotsTxt)
        });

    }

    async function get(key: string): Promise<CrawlStateType | null> {
        const data = await redisClient.hGetAll(key);

        if (Object.keys(data).length === 0) {
            return null;
        }

        return {
            _id: data._id!,
            seedUrl: data.seedUrl!,
            discoveredUrls: Number(data.discoveredUrls),
            crawledUrls: Number(data.crawledUrls),
            deDuplicateId: data.deDuplicateId!,
            status: data.status! as CrawlStateType["status"],
            failedUrls: Number(data.failedUrls),
            maxDepth: Number(data.maxDepth),
            robotsTxt: JSON.parse(data.robotsTxt || "")
        };
    }


    function generateKey(seedUrlId: string | Types.ObjectId): string {
        return `crawlState:${seedUrlId}`;
    }

    async function isComplete(key: string) {
        const data = await get(key);
        if (!data) {
            return false;

        }
        return data.discoveredUrls === data.crawledUrls + data.failedUrls;
    }

    async function incDiscoveredUrls(key: string, count = 1) {
        await redisClient.hIncrBy(key, "discoveredUrls", count);
    }

    async function incCrawledUrls(key: string, count = 1) {
        await redisClient.hIncrBy(key, "crawledUrls", count);
    }

    async function incFailedUrls(key: string, count = 1) {
        await redisClient.hIncrBy(key, "failedUrls", count);
    }
    async function setStatus(key: string, status: CrawlStateType["status"]) {
        await redisClient.hSet(key, "status", status);
    }

    async function remove(key: string) {
        await redisClient.del(key);
    }

}







