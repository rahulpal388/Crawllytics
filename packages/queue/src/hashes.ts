
import { createClient } from "redis";

export type DomainStatsMessageType = {
    totalUrls: number;
    totalUrlsCrawled: number;
}

export type DomainStateCommonType = {
    client: ReturnType<typeof createClient>;
    key: string;
}

export type DomainStatsType = DomainStateCommonType & {

    message: DomainStatsMessageType
}

export type IncreaseDomainStatsValueType = DomainStateCommonType & {
    incValue: number;
    field: keyof DomainStatsMessageType;
}





export async function setDomainStats({ client, key, message }: DomainStatsType) {
    await client.hSet(key, message);
}


export async function increaseDomainStatsValue({ client, key, field, incValue }: IncreaseDomainStatsValueType) {
    await client.hIncrBy(key, field, incValue);
}

export async function isCrawlCompleted({ client, key }: DomainStateCommonType): Promise<boolean> {
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