import { signupValidation } from "@/validation/signup.validation.js";
import { Request, Response, NextFunction } from "express";
import { AppError } from "@/middlewares/errors/appError.js";


export async function registerController(req: Request, res: Response, next: NextFunction) {

    const { success, data, error } = signupValidation.safeParse(req.body);

    if (!success) {
        return next(new AppError("Signup validation failed", 400));
    }

}
