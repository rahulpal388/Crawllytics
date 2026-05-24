import z from "zod"
import { globalEnv } from "@repo/config/globalEnv";

export const envSchema = globalEnv.extend({})



declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}