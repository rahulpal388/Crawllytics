import { AppError } from "@/middlewares/errors/appError.js";
import { Request, Response, NextFunction } from "express";
import { logger } from "@repo/lib/logger";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    logger.warn({
      message: err.message,
      path: req.path,
      metaData: {
        statusCode: err.statusCode,
        options: err.options,
      },
    });

    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  logger.error({
    message: "Internal Server Error",
    path: req.path,
    metaData: {
      statusCode: 500,
    },
  });

  res.status(500).json({
    message: "Internal Server Error",
  });
}
