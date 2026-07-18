import { RedisClientType } from "redis";
import { consumeFromGroup } from "../consumer.js";
import { STREAM_GROUPS, STREAMS } from "../../types/streamTypes.js";

export function emailConsumerConfig(redisClient: RedisClientType, consumerName: string) {
  return {
    consume,
    acknowledge,
  };

  async function consume() {
    return consumeFromGroup({
      redisClient,
      key: STREAMS.EMAIL_STREAM,
      group: STREAM_GROUPS.EMAIL_STREAM_GROUP,
      consumer: consumerName,
    });
  }

  async function acknowledge(messageId: string) {
    await redisClient.xAck(STREAMS.EMAIL_STREAM, STREAM_GROUPS.EMAIL_STREAM_GROUP, messageId);
  }
}
