import { Request, Response, NextFunction } from "express";
import { registerEmailRequestSchema } from "@repo/contracts/apiContracts/auth/register-email.request";
import { registerService } from "./register.service.js";
import { ApiError } from "@/shared/error/apiError.js";

export async function registerController(req: Request, res: Response) {
  const { success, data, error } = registerEmailRequestSchema.safeParse(req.body);

  if (!success) {
    throw ApiError.validation(error);
  }

  const info = await registerService.registerUser(data);

  res.status(200).json(info);
}
