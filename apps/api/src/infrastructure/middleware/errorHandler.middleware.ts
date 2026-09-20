import { Request, Response, NextFunction } from "express";
import { logger } from "@repo/lib/logger";
import { AppError } from "@/shared/error/appError.js";

export function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof AppError) {
    logger.warn({
      requestId: req.requestId,
      message: err.message,
      path: req.path,
    });
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errorCode: err.code,
      ...(err.data === undefined ? {} : err.data),
    });
  }

  res.status(500).json({
    message: "server error",
  });
}
