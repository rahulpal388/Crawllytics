import { RedisClientType } from "redis";
import { consumeFromGroup } from "../consumer.js";

export function crawlConsumerConfig(redisClient: RedisClientType, consumerName: string) {
    return {
        consume
    }

    async function consume() {
        return consumeFromGroup({
            redisClient,
            key: "crawl_stream",
            group: "crawl_stream_group",
            consumer: consumerName
        })
    }

}