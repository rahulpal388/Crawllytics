import { googleAuthController } from "@/controller/authController/googleAuth.controller.js";
import { googleCallbackController } from "@/controller/authController/googleCallback.controller.js";
import { loginController } from "@/controller/authController/login.controller.js";
import { registerController } from "@/controller/authController/register.controller.js";
import { verifyRegisterUserController } from "@/controller/authController/verifyRegisterUser.controller.js";
import { logoutController } from "@/controller/authController/logout.controller.js";
import { Router } from "express";

export const authRouter = Router();

authRouter.get("/google", googleAuthController);

authRouter.get("/google/callback", googleCallbackController);

authRouter.post("/register/user", registerController);
authRouter.post("/verify/register/user", verifyRegisterUserController);

authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
