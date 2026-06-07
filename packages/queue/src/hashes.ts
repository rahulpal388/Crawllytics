
import { createClient } from "redis";

/*

This file contains utility functions related to managing URL statistics in Redis. It includes functions to set URL statistics, increase specific values, and check if the crawling process for a URL is completed based on the total URLs and total URLs crawled.

*/

export type URLStatsMessageType = {
    totalUrls: number;
    totalUrlsCrawled: number;
}

export type URLStateCommonType = {
    client: ReturnType<typeof createClient>;
    key: string;
}

export type URLStatsType = URLStateCommonType & {

    message: URLStatsMessageType
}

export type IncreaseURLStatsValueType = URLStateCommonType & {
    incValue: number;
    field: keyof URLStatsMessageType;
}





export async function setDomainStats({ client, key, message }: URLStatsType) {
    await client.hSet(key, message);
}


export async function increaseDomainStatsValue({ client, key, field, incValue }: IncreaseURLStatsValueType) {
    await client.hIncrBy(key, field, incValue);
}

export async function isCrawlCompleted({ client, key }: URLStateCommonType): Promise<boolean> {
    const stats = await client.hGetAll(key);
    if (!stats || Object.keys(stats).length === 0) {
        return false;
    } else {
        return parseInt(stats.totalUrls || "0") === parseInt(stats.totalUrlsCrawled || "0");
    }

}


export function generateHashKey(hostname: string): string {
    return `domain:${hostname}:stats`;
}