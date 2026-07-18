import { envSchema } from "@/types/envTypes.js";

export function validateEnv() {
  const { success, error, data } = envSchema.safeParse(process.env);

  if (!success) {
    console.error(`ENV Error : ${error.message}`);
    process.exit(1);
  }

  return data;
}
