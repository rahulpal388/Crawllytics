import { Request, Response, NextFunction } from "express";

export const routeNotFoundMiddleware = (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
};
