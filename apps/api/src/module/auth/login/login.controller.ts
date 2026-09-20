import { NextFunction, Request, Response } from "express";
import { loginEmailRequestSchema } from "@repo/contracts/apiContracts/auth/login-email.request";
import { loginService } from "@/module/auth/login/login.service.js";
import cookieService from "@/shared/auth/cookies/cookie.service.js";
import { getRequestMetadata } from "@/lib/getRequestMetaData.js";
import { ApiError } from "@/shared/error/apiError.js";

export async function loginController(req: Request, res: Response, next: NextFunction) {
    const { success, data, error } = loginEmailRequestSchema.safeParse(req.body);

    if (!success) {
        throw ApiError.validation(error);
    }

    const sessionInfo = await getRequestMetadata(req);
    const user = await loginService(data, sessionInfo);

    // set the session cookie in the response
    cookieService.setCookie(res, user.data.sessionId);

    res.status(200).json(user);

}

