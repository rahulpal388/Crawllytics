import { AnalyzeStreamMessageType } from "../../types/analyzeStreamMessageTypes.js";
import { RedisClientType } from "redis";
import { produce } from "../producer.js";
import { STREAMS } from "@/types/streamTypes.js";

export function analyzerPublisherConfig(redisClient: RedisClientType) {
  return {
    enqueue,
  };

  async function enqueue(message: AnalyzeStreamMessageType) {
    return produce({
      redisClient,
      key: STREAMS.ANALYZE_STREAM,
      message,
    });
  }
}
