import { StreamKeys, StreamMessageMap } from "../types/streamTypes.js";
import { RedisClientType } from "redis";

type ProducerOptionsType<T extends StreamKeys> = {
  redisClient: RedisClientType;
  key: T;
  message: StreamMessageMap[T];
};

export async function produce<T extends StreamKeys>({
  redisClient,
  key,
  message,
}: ProducerOptionsType<T>) {
  return await redisClient.xAdd(key, "*", {
    event: JSON.stringify(message),
  });
}
