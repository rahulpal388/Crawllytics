import { AnalyzeWebsiteDataType, CrawlWebsiteDataType } from "./types.js";
import { createClient } from "redis";

export const STREAMS = {
    CRAWL: "crawl:url",
    ANALYZE: "analyze:url"
} as const;

export type StreamsKeyTypes = typeof STREAMS[keyof typeof STREAMS];

export type StreamMessageMap = {
    "crawl:url": CrawlWebsiteDataType,
    "analyze:url": AnalyzeWebsiteDataType
}



export type ConsumerType<T extends StreamsKeyTypes> = {
    key: T;
    id: string,
    redisClient: ReturnType<typeof createClient>
}

export type ConsumerReturnType<T extends StreamsKeyTypes> = {
    name: string;
    messages: Array<{
        id: string;
        message: StreamMessageMap[T]
    }>;
}
export async function consumer<T extends StreamsKeyTypes>({ key, id, redisClient }: ConsumerType<T>): Promise<ConsumerReturnType<T> | null> {
    const res = await redisClient.xRead({
        key: key,
        id
    }, {
        COUNT: 1,
        BLOCK: 10000
    }) as ConsumerReturnType<T>[];
    if (!res) {
        return null;
    }
    return res[0] || null;
}