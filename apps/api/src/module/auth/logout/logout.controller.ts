import { sessionService } from "@/app/server.js";
import cookieService from "@/shared/auth/cookies/cookie.service.js";
import { ApiError } from "@/shared/error/apiError.js";
import { AppError } from "@/shared/error/appError.js";
import { Request, Response } from "express";

export async function logoutController(req: Request, res: Response) {
  const sessionUser = req.user;

  //  TODO : might delete or mark un-active in loginActivity model

  // delete the session from redis
  sessionService.delete(sessionUser.sessionId);

  // delete the cookie
  cookieService.clearCookie(res);

  res.status(200).json({ message: "Logout successful" });
}
