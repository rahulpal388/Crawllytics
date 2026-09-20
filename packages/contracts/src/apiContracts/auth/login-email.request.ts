import z from "zod";
import { emailSchema } from "../common/email-schema.js";
import { passwordSchema } from "../common/password.schema.js";

export const loginEmailRequestSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginEmailRequestType = z.infer<typeof loginEmailRequestSchema>;
