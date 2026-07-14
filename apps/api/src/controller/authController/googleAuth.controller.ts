import { Request, Response, NextFunction } from "express";
import { googleService } from "@/services/google.service.js";


const googleServiceInstance = googleService();

export async function googleAuthController(req: Request, res: Response, next: NextFunction) {

    try {
        const authorizationUrl = await googleServiceInstance.createAuthorizationUrl();
        res.redirect(authorizationUrl.toString());
    } catch (error) {
        next(error);
    }

}