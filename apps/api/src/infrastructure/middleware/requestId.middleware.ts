import { Request, Response, NextFunction } from "express";
import randomUUID from "node:crypto";

export function requestIdMiddleware(req: Request, res: Response, next: NextFunction) {
  const requestId = randomUUID.randomUUID();
  res.setHeader("X-Request-Id", requestId);
  req.requestId = requestId;
  next();
}
