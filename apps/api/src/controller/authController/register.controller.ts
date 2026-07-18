import { signupValidation } from "@/validation/signup.validation.js";
import { Request, Response, NextFunction } from "express";
import { AppError } from "@/middlewares/errors/appError.js";
import AuthService from "@/services/auth.service.js";

export async function registerController(req: Request, res: Response, next: NextFunction) {
  const { success, data, error } = signupValidation.safeParse(req.body);

  if (!success) {
    return next(new AppError("Invalid input", 400));
  }

  try {
    await AuthService.registerUser(data);
  } catch (error) {
    next(error);
  }
}
