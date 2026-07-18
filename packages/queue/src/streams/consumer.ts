import { StreamGroupKeys, StreamKeys, StreamMessageMap } from "../types/streamTypes.js";
import { StreamReturnType } from "../types/streamReturnType.js";
import { RedisClientType } from "redis";

type ConsumerOptionsType<T extends StreamKeys> = {
  redisClient: RedisClientType;
  key: T;
  group: StreamGroupKeys;
  consumer: string;
};

export async function consumeFromGroup<T extends StreamKeys>({
  redisClient,
  key,
  group,
  consumer,
}: ConsumerOptionsType<T>): Promise<StreamReturnType<T>[]> {
  const response = await redisClient.xReadGroup(
    group,
    consumer,
    {
      key,
      id: ">",
    },
    {
      COUNT: 1,
      BLOCK: 0,
    },
  );

  if (!response || response.length === 0 || !response[0]) {
    return [];
  }
  return response[0].messages.map((msg) => {
    const event = msg.message.event;

    if (!event) {
      throw new Error("Missing event field in stream message");
    }

    return {
      id: msg.id,
      message: JSON.parse(event) as StreamMessageMap[T],
    };
  });
}
