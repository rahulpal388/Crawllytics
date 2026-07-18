import z from "zod";

export const loginValidation = z.object({
  email: z.string(),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
});

export type LoginType = z.infer<typeof loginValidation>;
