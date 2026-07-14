import { envSchema } from "@/validation/envTypes.js";
import e from "express";


export function ValidateEnv() {
    const { success, data, error } = envSchema.safeParse(process.env);

    if (!success) {
        console.error(`ENV Error : ${error.message}`);
        process.exit(1);
    }

    return data;
}