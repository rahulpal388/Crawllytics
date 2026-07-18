import z from "zod";

import { globalEnv } from "@repo/config/globalEnv";

export const envSchema = z.object({
  REDIS_URL: z.string(),
  REDIS_USERNAME: z.string(),
  REDIS_PASSWORD: z.string(),
  RESEND_API_KEY: z.string(),
});
