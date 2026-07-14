import z from "zod";


export const signupValidation = z.object({
    username: z.string().min(3).max(30),
    displayName: z.string().min(3).max(30),
    email: z.string(),
    password: z.string().min(8).max(20).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must be min 8 length and contain at least one uppercase letter, one lowercase letter, one number, and one special character."),
})


export type SignupType = z.infer<typeof signupValidation>