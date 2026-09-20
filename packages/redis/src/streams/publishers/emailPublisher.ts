import { EmailStreamMessage } from "@/types/emailStreamMessageType.js";
import { RedisClientType } from "redis";
import { produce } from "../producer.js";
import { STREAMS } from "../../types/streamTypes.js";

export function emailPublisherConfig(redisClient: RedisClientType) {
  return {
    enqueue,
  };

  async function enqueue(message: EmailStreamMessage) {
    return produce({
      redisClient,
      key: STREAMS.EMAIL_STREAM,
      message,
    });
  }
}
