import { Request, Response, NextFunction } from "express";
import { env, sessionStore } from "@/index.js";
import SessionService from "@/services/session.service.js";
import { cookieOptions } from "@/config/cookieOptions.js";
import AuthService from "@/services/auth.service.js";
import EmailService from "@/services/email.service.js";


export async function googleCallbackController(req: Request, res: Response, next: NextFunction) {
    const { state, code } = req.query;

    if (typeof state !== "string" || typeof code !== "string") {
        res.status(400).send("Invalid state or code");
        return;
    }

    try {

        const callbackUrl = new URL(req.originalUrl, env.API_ORIGIN);

        const token = await AuthService.getToken(state, callbackUrl);

        const userInfo = await AuthService.getUserInfo(token);

        console.log("userinfo ", userInfo)

        const sessionId = await SessionService.createSession({
            userId: userInfo.sub,
            ipAddress: req.ip || null,
            userAgent: req.headers["user-agent"] || ""
        });
       
        await EmailService.sendWelcomeEmail(userInfo.email, userInfo.name);

        res.cookie("sessionId", sessionId, cookieOptions)

        res.status(200).redirect(env.REDIRECT_URL);


    } catch (error) {
        next(error);
    }

}