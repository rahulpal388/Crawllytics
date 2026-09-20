import { env } from "@/app/app.js";
import { googleAuthService } from "@/app/server.js";
import { AppError } from "@/shared/error/appError.js";
import { Request, Response } from "express";
import { getRequestMetadata } from "@/lib/getRequestMetaData.js";
import cookieService from "@/shared/auth/cookies/cookie.service.js";
import { ApiError } from "@/shared/error/apiError.js";

export async function googleCallbackController(req: Request, res: Response) {
  const { code, state } = req.query;

  if (!code || typeof code != "string") {
    throw ApiError.forbidden("Invalid google code");
  }

  if (!state || typeof state != "string") {
    throw ApiError.forbidden("Invalide google state ");
  }

  const callbackUrl = new URL(req.originalUrl, `${req.protocol}://${req.get("host")}`);

  const requestMeta = await getRequestMetadata(req);

  const response = await googleAuthService.addUser(state, code, callbackUrl, requestMeta);

  // create the cookie
  cookieService.setCookie(res, response.sessionId);

  const url = googleAuthService.getRedirectUrl();
  res.status(200).redirect(url.href);
}
