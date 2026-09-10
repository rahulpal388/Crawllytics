
import { Request, Response, NextFunction } from "express";
import { verifyRegistrationOTPRequestSchema } from "@repo/contracts/apiContracts/auth/register-email.request";
import { registerService } from "./register.service.js";
import cookieService from "@/shared/auth/cookies/cookie.service.js";
import { getRequestMetadata } from "@/lib/getRequestMetaData.js";

export async function verifyRegistrationOTPController(req: Request, res: Response, next: NextFunction) {
    const { success, data, error: zodError } = verifyRegistrationOTPRequestSchema.safeParse(req.body);
    if (!success) {
        return next(zodError);
    }


    const sessionInfo = await getRequestMetadata(req);

    console.log("sessionINfo ", sessionInfo)
    const userInfo = await registerService.verifyUserOtp(data.verificationId, data.otp, sessionInfo);



    // set the session cookie in the response
    cookieService.setCookie(res, userInfo.data.sessionId);


    res.status(200).json(userInfo);
}