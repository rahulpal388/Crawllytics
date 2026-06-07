import { createClient } from "redis";

/* 
    This file contains utility functions related to keep track of visited URLs of a given Seed URL.

*/

export type AddVisitedUrlTypes = {
    client: ReturnType<typeof createClient>;
    key: string;
    addUrls: string[];
}

export type CreateVisitedUrlSetType = Pick<AddVisitedUrlTypes, "client" | "addUrls"> & {
    seedUrl: string;
};


export async function createVisitedUrlSet({ client, seedUrl, addUrls }: CreateVisitedUrlSetType): Promise<{ key: string } | null> {
    const key = generateVisitedUrlKey(seedUrl);

    try {
        await addUrlToVisitedSet({ client, key, addUrls });
    } catch {
        console.error("Error creating visited url set");
        return null;
    }

    return {
        key
    }
}

export async function addUrlToVisitedSet({ client, key, addUrls }: AddVisitedUrlTypes) {
    await client.sAdd(key, addUrls);
}


export async function isMemberOfVisitedSet({ client, key, url }: Omit<AddVisitedUrlTypes, "addUrls"> & { url: string }): Promise<boolean> {
    const res = await client.sIsMember(key, url);
    return res == 0 ? false : true;
}

export function generateVisitedUrlKey(seedUrl: string): string {
    return `urls:${seedUrl}`;
}