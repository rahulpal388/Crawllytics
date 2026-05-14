import { redisClient } from "@/index.js";
import { producer, ProducerType } from "@repo/queue/producer";
import { StreamsKeyTypes } from "@repo/queue/streams";


// handle error is remeaning
export async function produce<T extends StreamsKeyTypes>({ key, message }: Omit<ProducerType<T>, "client">) {
    await producer({
        client: redisClient,
        key,
        message
    })
}