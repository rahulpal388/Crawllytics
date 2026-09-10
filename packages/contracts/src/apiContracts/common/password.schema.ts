import z from "zod";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 20;

export const passwordSchema = z
    .string()
    .min(
        MIN_PASSWORD_LENGTH,
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
    )
    .max(
        MAX_PASSWORD_LENGTH,
        `Password must be at most ${MAX_PASSWORD_LENGTH} characters long`
    )
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    );