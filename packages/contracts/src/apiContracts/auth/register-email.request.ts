import z from "zod";
import { passwordSchema } from "../common/password.schema.js";
import { emailSchema } from "../common/email-schema.js";

export const MIN_OTP_LENGTH = 6;

export const registerEmailRequestSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long" })
    .max(50, { message: "Name should not exceed 50 characters" }),
  email: emailSchema,
  password: passwordSchema,
});

export const verifyRegistrationOTPRequestSchema = z.object({
  verificationId: z.string().max(200, "Verification ID should not exceed 200 characters"),
  otp: z.string().length(MIN_OTP_LENGTH, `OTP must be ${MIN_OTP_LENGTH} characters long`),
});

export type RegisterEmailRequestType = z.infer<typeof registerEmailRequestSchema>;

export type VerifyRegistrationOTPRequestType = z.infer<typeof verifyRegistrationOTPRequestSchema>;
