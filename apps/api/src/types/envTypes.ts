import z from "zod";
import { globalEnv } from "@repo/config/globalEnv";


export const envSchema = globalEnv.extend({
    NODE_ENV: z.enum(["production", "development"]).default("development"),
    PORT: z.string().default("8080"),
    CROSS_ORIGIN_URL: z.string(),
});

export type EnvTypes = z.infer<typeof envSchema>;


declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvTypes { }
    }
}



