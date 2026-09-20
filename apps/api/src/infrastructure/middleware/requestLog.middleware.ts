import { Request, Response, NextFunction } from "express";
import { logger } from "@repo/lib/logger";

function requestLogMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  logger.logRequest({
    requestId: req.requestId,
    method: req.method,
    path: req.path,
    ip: req.get("X-Forwarded-For") || req.ip || "",
    userAgent: req.get("User-Agent") || "",
    contentLength: parseInt(req.get("Content-Length") || "0", 10),
  });

  res.on("finish", () => {
    logger.logRequestCompleted({
      requestId: req.requestId,
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      durationMs: Date.now() - startTime,
    });
  });

  next();
}

export default requestLogMiddleware;
