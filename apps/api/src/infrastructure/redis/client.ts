import { env } from "@/app/app.js";
import { createRedisConnection } from "@repo/redis/client/client";

export async function getRedisClient() {
  return createRedisConnection({
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME,
  });
}
