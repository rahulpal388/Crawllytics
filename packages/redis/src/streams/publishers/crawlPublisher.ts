import { produce } from "../producer.js";
import { CrawlStreamMessageType } from "../../types/crawlStreamMessageType.js";
import { RedisClientType } from "redis";
import { STREAMS } from "../../types/streamTypes.js";

export function crawlPublisherConfig(redisClient: RedisClientType) {
  return {
    enqueue,
  };

  async function enqueue(message: CrawlStreamMessageType) {
    return produce({
      redisClient,
      key: STREAMS.CRAWL_STREAM,
      message,
    });
  }
}
