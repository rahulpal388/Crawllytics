import { StreamMessageMap, StreamsKeyTypes } from "@/streams.js";
import { createClient } from "redis";

export type ProducerType<T extends StreamsKeyTypes> = {
    client: ReturnType<typeof createClient>
    key: T;
    message: StreamMessageMap[T]
}
// handle error is remeaning
export async function producer<T extends StreamsKeyTypes>({ key, message, client }: ProducerType<T>) {
    const res = await client.xAdd(key, "*", message);
}