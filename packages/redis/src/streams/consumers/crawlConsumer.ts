import { RedisClientType } from "redis";
import { consumeFromGroup } from "../consumer.js";
import { STREAM_GROUPS, STREAMS } from "../../types/streamTypes.js";

export function crawlConsumerConfig(redisClient: RedisClientType, consumerName: string) {
  return {
    consume,
    ack
  };

  async function consume() {
    return consumeFromGroup({
      redisClient,
      key: STREAMS.CRAWL_STREAM,
      group: STREAM_GROUPS.CRAWL_STREAM_GROUP,
      consumer: consumerName,
    });
  }

  async function ack(messageId: string) {
    return redisClient.xAck(STREAMS.CRAWL_STREAM, STREAM_GROUPS.CRAWL_STREAM_GROUP, messageId);

  }


}

