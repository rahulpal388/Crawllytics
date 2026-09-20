import { NextFunction, Request, Response } from "express";
import { forgetPasswordRequestSchema } from "@repo/contracts/apiContracts/auth/forget-password.request";
import forgetPasswordService from "@/module/auth/forget-password/forget-password.services.js";
import { ApiError } from "@/shared/error/apiError.js";

export async function forgetPasswordController(req: Request, res: Response) {
  const { success, data, error } = forgetPasswordRequestSchema.safeParse(req.body);
  if (!success) {
    throw ApiError.validation(error);
  }

  const response = await forgetPasswordService.sendResetPasswordEmail(data.email);

  res.status(200).json(response);
}
