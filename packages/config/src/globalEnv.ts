import z from "zod";


export const globalEnv = z.object({
    DATABASE_URL: z.string().nonempty("DATABASE_URL is required"),
    REDIS_URL: z.string("REDIS_URL is required"),
    REDIS_PASSWORD: z.string("REDIS_PASSWORD is required"),
    REDIS_USERNAME: z.string("REDIS_USERNAME is required"),
})

