import z from "zod";


export const forgetPasswordValidation = z.object({
    email: z.string()
})



export type ForgetPasswordType = z.infer<typeof forgetPasswordValidation>