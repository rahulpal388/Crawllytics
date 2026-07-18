import { SessionStoreType } from "../../types/sessionStoreType.js";
import { RedisClientType } from "redis";

export function sessionStoreConfig(redisClient: RedisClientType) {
  return {
    generateKey,
    add,
    get,
    remove,
  };

  function generateKey(sessionId: string) {
    return `auth:sessions:${sessionId}`;
  }

  async function add(key: string, data: SessionStoreType) {
    return await redisClient.set(key, JSON.stringify(data), {
      EX: 60 * 60 * 24 * 7,
    });
  }
  async function get(key: string): Promise<SessionStoreType | null> {
    const data = await redisClient.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as SessionStoreType;
  }

  async function remove(key: string) {
    return await redisClient.del(key);
  }
}
