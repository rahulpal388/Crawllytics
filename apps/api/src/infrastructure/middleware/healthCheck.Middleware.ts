import { Request, Response, NextFunction } from "express";

export function healthCheckMiddleware(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    status: "ok",
    message: "API is healthy",
    timestamp: Date.now(),
  });
}
