import z from "zod"

export const envSchema = z.object({
    REDIS_URL: z.string(),
    REDIS_PASSWORD: z.string(),
    REDIS_USERNAME: z.string(),
})




declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}