import { consumeFromGroup } from "../consumer.js";
import { RedisClientType } from "redis";


export function analyzerConsumerConfig(redisClient: RedisClientType, consumerName: string) {
    return {
        consume
    }

    async function consume() {
        return consumeFromGroup({
            redisClient,
            key: "analyze_stream",
            group: "analyze_stream_group",
            consumer: consumerName
        })
    }
}