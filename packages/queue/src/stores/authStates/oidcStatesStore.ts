import { OIDCStateType } from "../../types/oidcStateType.js";
import { RedisClientType } from "redis";

export function oidcStatesStore(redisClient: RedisClientType) {
  return {
    generateKey,
    add,
    get,
    remove,
  };

  function generateKey(state: string) {
    return `auth:oidcStates:${state}`;
  }

  async function add(key: string, data: OIDCStateType) {
    return await redisClient.set(key, JSON.stringify(data), {
      EX: 60 * 10,
    });
  }

  async function get(key: string): Promise<OIDCStateType | null> {
    const data = await redisClient.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as OIDCStateType;
  }

  async function remove(key: string) {
    return await redisClient.del(key);
  }
}
