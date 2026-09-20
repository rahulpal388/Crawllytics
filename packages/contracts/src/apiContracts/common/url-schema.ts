import z from "zod"



export const urlSchema = z
    .string()
    .trim()
    .max(2048, { message: "URL should not exceed 2048 characters" })
    .pipe(
        z.url({
            protocol: /^https?$/,
            message: "Invalide http/https url"
        })
    )