import cookieService from "@/shared/auth/cookies/cookie.service.js";
import { NextFunction, Request, Response } from "express";
import { sessionService } from "@/app/server.js";
import { ApiError } from "@/shared/error/apiError.js";

export async function authenticateMiddleware(req: Request, res: Response, next: NextFunction) {
  const sessionId = cookieService.getSessionId(req);

  if (!sessionId) {
    throw ApiError.unauthorized("User is not authenticated");
  }

  const sessionUser = await sessionService.get(sessionId);

  if (!sessionUser) {
    cookieService.clearCookie(res);
    throw ApiError.unauthorized("User is not authenticated");
  }

  req.user = { ...sessionUser, sessionId };
  next();
}
