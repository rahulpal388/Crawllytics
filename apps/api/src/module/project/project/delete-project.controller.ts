
import { AppError } from "@/shared/error/appError.js";
import { Request, NextFunction, Response } from "express";
import { deleteProjectSchema } from "@repo/contracts/apiContracts/project/project.request";
import { projectService } from "@/module/project/project/project.service.js";
import { ApiError } from "@/shared/error/apiError.js";


export async function DeleteProject(req: Request, res: Response, next: NextFunction) {


    const { success, data, error } = deleteProjectSchema.safeParse(req.body);

    if (!success) {
        throw ApiError.validation(error);
    }

    // delete the project
    const response = await projectService.deleteProject(data);

    res.status(200).json(response);

}