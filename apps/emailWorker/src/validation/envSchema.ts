import z from "zod";

import { globalEnv } from "@repo/contract/globalEnv";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  REDIS_URL: z.string(),
  REDIS_USERNAME: z.string(),
  REDIS_PASSWORD: z.string(),
  RESEND_API_KEY: z.string(),
});
