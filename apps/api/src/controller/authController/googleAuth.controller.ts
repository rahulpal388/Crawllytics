import AuthService from "@/services/auth.service.js";
import { Request, Response, NextFunction } from "express";



export async function googleAuthController(req: Request, res: Response, next: NextFunction) {

    try {
        const authorizationUrl = await AuthService.createAuthorizationUrl();
        res.redirect(authorizationUrl.toString());
    } catch (error) {
        next(error);
    }

}