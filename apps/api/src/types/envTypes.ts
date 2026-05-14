import z from "zod";

export const envSchema = z.object({
    NODE_ENV: z.enum(["production", "development"]).default("development"),
    PORT: z.string().default("8080"),
    CROSS_ORIGIN_URL: z.string(),
    REDIS_URL: z.string(),
    REDIS_PASSWORD: z.string(),
    REDIS_USERNAME: z.string(),
});

export type EnvTypes = z.infer<typeof envSchema>;


declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvTypes { }
    }
}



