import z from "zod";


export const googleValidation = z.object({
    code: z.string(),
    state: z.string()
})



export type GoogleType = z.infer<typeof googleValidation>