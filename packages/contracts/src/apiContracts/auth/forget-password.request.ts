
import { z } from "zod";
import { passwordSchema } from "../common/password.schema.js";
import { emailSchema } from "../common/email-schema.js";

export const forgetPasswordRequestSchema = z.object({
    email: emailSchema
});


export const verifyForgetPasswordRequestSchema = z.object({
    token: z.string().max(200, "Token should not exceed 200 characters"),
    newPassword: passwordSchema
})

export type verifyForgetPasswordRequestType = z.infer<typeof verifyForgetPasswordRequestSchema>;