import z from "zod"
import { ObjectIdSchema } from "../common/objectId.schema.js"


export const createProjectSchema = z.object({
    projectName: z
        .string()
        .trim()
        .min(1, { message: "Project name is required" })
        .max(100, { message: "Project name should not exceed 100 characters" }),

    domain: z
        .string()
        .trim()
        .max(2048, { message: "URL should not exceed 2048 characters" })
        .pipe(
            z.url({
                protocol: /^https?$/,
                message: "Invalide http/https url"
            })
        )
});



export const deleteProjectSchema = z.object({
    projectId: ObjectIdSchema
});


export type CreateProjectRequestType = z.infer<typeof createProjectSchema>;
export type DeleteProjectRequestType = z.infer<typeof deleteProjectSchema>;