import { createClient } from "redis";

export type AddToSetType = {
    client: ReturnType<typeof createClient>;
    key: string;
    value: string;
}


export async function addToSet({ client, key, value }: AddToSetType) {
    await client.sAdd(key, value);
}


export async function isMemberOfSet({ client, key, value }: AddToSetType): Promise<boolean> {
    const res = await client.sIsMember(key, value);
    return res == 0 ? false : true;
}

export function generateSetKey(hostname: string): string {
    return `urls:${hostname}`;
}