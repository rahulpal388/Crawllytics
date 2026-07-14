import { googleAuthController } from "@/controller/authController/googleAuth.controller.js";
import { googleCallbackController } from "@/controller/authController/googleCallback.controller.js";
import { registerController } from "@/controller/authController/register.controller.js";
import { Router } from "express";


export const authRouter = Router();


authRouter.get("/google", googleAuthController);


authRouter.get("/google/callback", googleCallbackController);



authRouter.get("/register", registerController)