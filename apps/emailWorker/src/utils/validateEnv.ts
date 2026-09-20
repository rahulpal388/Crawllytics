import { envSchema } from "@/validation/envSchema.js";

export function validateEnv() {
  const { success, data, error } = envSchema.safeParse(process.env);

  if (!success) {
    console.error("Environment variable validation failed");
    console.error(error);
    process.exit(1);
  }

  return data;
}
