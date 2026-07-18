import { consumeFromGroup } from "../consumer.js";
import { RedisClientType } from "redis";
import { STREAM_GROUPS, STREAMS } from "@/types/streamTypes.js";

export function analyzerConsumerConfig(redisClient: RedisClientType, consumerName: string) {
  return {
    consume,
  };

  async function consume() {
    return consumeFromGroup({
      redisClient,
      key: STREAMS.ANALYZE_STREAM,
      group: STREAM_GROUPS.ANALYZE_STREAM_GROUP,
      consumer: consumerName,
    });
  }
}
