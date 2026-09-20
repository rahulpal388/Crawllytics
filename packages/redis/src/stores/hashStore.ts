import { RedisClientType } from "redis";

export type HashStoreType = ReturnType<typeof HashStoreConfig>;

export function HashStoreConfig(redisClient: RedisClientType) {
  return {
    set,
    setWithExpire,
    get,
    deleteByKey,
    expire,
  };

  async function set<T extends Record<string, string>>(key: string, msg: T) {
    return redisClient.hSet(key, msg);
  }

  async function setWithExpire<T extends Record<string, string>>(
    key: string,
    msg: T,
    expireIn: number,
  ) {
    return redisClient.multi().hSet(key, msg).expire(key, expireIn).exec();
  }

  async function get<T>(key: string): Promise<T | null> {
    const msg = await redisClient.hGetAll(key);
    if (Object.keys(msg).length === 0) {
      return null;
    }

    return msg as T;
  }

  async function deleteByKey(key: string) {
    return redisClient.del(key);
  }

  async function expire(key: string, seconds: number) {
    return redisClient.expire(key, seconds);
  }
}
