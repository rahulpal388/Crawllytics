import { UserOtpType } from "../../types/userOtpType.js";
import { RedisClientType } from "redis";

export function userOtpStore(redisClient: RedisClientType) {
  return {
    generateKey,
    setUserOtp,
    getUserOtp,
    remove,
  };

  function generateKey(email: string) {
    return `auth:userOtp:${email}`;
  }

  async function setUserOtp(key: string, data: UserOtpType) {
    return await redisClient.set(key, JSON.stringify(data), {
      EX: 60 * 2,
    });
  }

  async function getUserOtp(key: string): Promise<UserOtpType | null> {
    const data = await redisClient.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as UserOtpType;
  }

  async function remove(key: string) {
    await redisClient.del(key);
  }
}
