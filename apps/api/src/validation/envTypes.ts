import z from "zod";
import { globalEnv } from "@repo/config/globalEnv";

export const envSchema = globalEnv.extend({
  NODE_ENV: z.enum(["production", "development"]).default("development"),
  PORT: z.string().default("8080"),
  CROSS_ORIGIN_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  API_BASE_PATH: z.string(),
  API_ORIGIN: z.string(),
  REDIRECT_URL: z.string(),
  COOKIE_DOMAIN: z.string(),
});
