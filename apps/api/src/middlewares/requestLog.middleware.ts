import { Request, Response, NextFunction } from "express";
import { logger } from "@repo/lib/logger";

function requestLogMiddleware(req: Request, res: Response, next: NextFunction) {
    logger.logRequest({
        timestamp: new Date().toISOString(),
        level: "INFO",
        requestId: req.headers["x-request-id"] as string,
        event: "REQUEST",
        method: req.method,
        path: req.path,
        ip: req.get("X-Forwarded-For") || req.ip || "",
        userAgent: req.get("User-Agent") || "",
        contentLength: parseInt(req.get("Content-Length") || "0", 10)
    });
    next();
}


export default requestLogMiddleware;