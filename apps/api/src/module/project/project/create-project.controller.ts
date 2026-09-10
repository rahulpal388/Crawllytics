import { Request, NextFunction, Response } from "express";
import { createProjectSchema } from "@repo/contracts/apiContracts/project/project.request";
import { projectService } from "@/module/project/project/project.service.js";
import { AppError } from "@/shared/error/appError.js";
import { ApiError } from "@/shared/error/apiError.js";


export async function CreateProject(req: Request, res: Response, next: NextFunction) {
    const { success, data, error } = createProjectSchema.safeParse(req.body);

    if (!success) {
        throw ApiError.validation(error)
    }
    const response = await projectService.createProject(data, req.user);

    res.status(201).json(response);

}