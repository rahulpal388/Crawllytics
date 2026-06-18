import { produce } from "../producer.js";
import { CrawlStreamMessageType } from "@/types/crawlStreamMessageType.js";
import { RedisClientType } from "redis";

export function crawlPublisherConfig(redisClient: RedisClientType) {

    return {
        enqueue
    }

    async function enqueue(message: CrawlStreamMessageType) {
        return produce({
            redisClient,
            key: "crawl_stream",
            message
        })
    }
}