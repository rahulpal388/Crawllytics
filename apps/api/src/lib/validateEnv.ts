import { envSchema } from "@/types/envTypes.js";
import e from "express";


export function ValidateEnv() {
    const { success, error } = envSchema.safeParse(process.env);

    if (!success) {
        console.error(`ENV Error : ${error.message}`);
        process.exit();
    }
}