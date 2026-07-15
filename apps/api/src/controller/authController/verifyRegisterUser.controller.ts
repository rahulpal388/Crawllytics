import { cookieOptions } from "@/config/cookieOptions.js";
import { AppError } from "@/middlewares/errors/appError.js";
import AuthService from "@/services/auth.service.js";
import SessionService from "@/services/session.service.js";
import { verifySignupValidation } from "@/validation/signup.validation.js";
import { Request, Response, NextFunction } from "express";


export async function verifyRegisterUserController(req: Request, res: Response, next: NextFunction) {

    const { success, data } = verifySignupValidation.safeParse(req.body);

    if (!success) {
        return next(new AppError("Invalid input", 400));
    }

    try {

        const verifyUser = await AuthService.verifyRegisterUser(data);

        const sessionId = SessionService.createSession({
            userId: verifyUser.userId,
            ipAddress: req.ip || null,
            userAgent: req.get("User-Agent") ?? ""
        });



        res.status(200)
            .cookie("session", sessionId, cookieOptions)
            .json({
                name: verifyUser.name,
                email: verifyUser.email,
                avatar: verifyUser.avatar,
                status: verifyUser.status
            })


    } catch (error) {
        next(error);
    }
}