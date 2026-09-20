import { RedisClientType } from "redis";

export function SetStoreConfig(redisClient: RedisClientType) {
  return {
    add,
    get,
    remove,
  };

  async function add(
    key: string,
    value: string,
    options?: {
      EX?: number;
    },
  ) {
    return await redisClient.set(key, value, options);
  }

  async function get(key: string): Promise<string | null> {
    return await redisClient.get(key);
  }

  async function remove(key: string) {
    return await redisClient.del(key);
  }
}
