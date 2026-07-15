import { loginValidation } from "@/validation/login.validation.js";
import { Request, Response, NextFunction } from "express";
import { AppError } from "@/middlewares/errors/appError.js";
import AuthService from "@/services/auth.service.js";
import SessionService from "@/services/session.service.js";
import { cookieOptions } from "@/config/cookieOptions.js";

export async function loginController(req: Request, res: Response, next: NextFunction) {
    const { success, data } = loginValidation.safeParse(req.body);

    if (!success) {
        return next(new AppError("Invalid input", 401));
    }

    try {

        const user_Agent = req.get("User-Agent");
        const ipAddress = req.ip;

        const user = await AuthService.loginUser(data, {
            userAgent: user_Agent ?? null,
            ip: ipAddress ?? null,
            time: new Date()
        })

        const sessionId = SessionService.createSession({
            userId: data.email,
            ipAddress: ipAddress ?? null,
            userAgent: user_Agent ?? ""
        })

        res.status(200)
            .cookie("session", sessionId, cookieOptions)
            .json({
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                status: user.status
            })

    } catch (error) {
        next(error);
    }
}