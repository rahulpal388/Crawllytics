import { redisClient } from "@/index.js";
import { StreamMessageMap, StreamsKeyTypes } from "@repo/queue/streams";


export type ConsumerType<T extends StreamsKeyTypes> = {
    key: T;
    id: string
}

export type ConsumerReturnType<T extends StreamsKeyTypes> = {
    name: string;
    messages: Array<{
        id: string;
        message: StreamMessageMap[T]
    }>;
}
export async function consumer<T extends StreamsKeyTypes>({ key, id }: ConsumerType<T>): Promise<ConsumerReturnType<T> | null> {
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