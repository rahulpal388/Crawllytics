import { Request, Response, NextFunction } from "express";
import { env } from "@/index.js";
import { googleService } from "@/services/google.service.js";
import { sessionService } from "@/services/session.service.js";
import { sessionCookieOptions } from "@/config/cookieOptions.js";

const googleServiceInstance = googleService();

export async function googleCallbackController(req: Request, res: Response, next: NextFunction) {
    const { state, code } = req.query;

    if (typeof state !== "string" || typeof code !== "string") {
        res.status(400).send("Invalid state or code");
        return;
    }

    try {

        const callbackUrl = new URL(req.originalUrl, env.API_ORIGIN);

        const token = await googleServiceInstance.getToken(state, callbackUrl);

        const userInfo = await googleServiceInstance.getUserInfo(token);

        console.log("userinfo ", userInfo)

        const sessionId = await sessionService().createSession({
            userId: userInfo.sub,
            ipAddress: req.ip || null,
            userAgent: req.headers["user-agent"] || ""
        });

        res.cookie("sessionId", sessionId, sessionCookieOptions)

        res.status(200).redirect(env.REDIRECT_URL);


    } catch (error) {
        next(error);
    }

}