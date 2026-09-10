import { z } from "zod";



export const emailSchema = z.email({ message: "Invalid email format" }).max(100, { message: "Email should not exceed 100 characters" })

