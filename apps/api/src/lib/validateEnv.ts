import { envSchema } from "@/shared/types/envTypes.js";

export function ValidateEnv() {
  const { success, data, error } = envSchema.safeParse(process.env);

  if (!success) {
    console.error(`ENV Error : ${error.message}`);
    process.exit(1);
  }

  return data;
}
