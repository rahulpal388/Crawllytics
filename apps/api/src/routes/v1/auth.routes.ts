import { googleAuthController } from "@/controller/authController/googleAuth.controller.js";
import { googleCallbackController } from "@/controller/authController/googleCallback.controller.js";
import { loginController } from "@/controller/authController/login.controller.js";
import { registerController } from "@/controller/authController/register.controller.js";
import { verifyRegisterUserController } from "@/controller/authController/verifyRegisterUser.controller.js";
import { logoutController } from "@/controller/authController/logout.controller.js";
import { slidingWindowRateLimit } from "@/middlewares/rate-limit/slidingWindowRateLimit.middleware.js";
import { Router } from "express";


export const authRouter = Router();


// google auth routes
authRouter.get("/google", googleAuthController);
authRouter.get("/google/callback", googleCallbackController);


// email and password auth routes
authRouter.post("/register/user", registerController);
authRouter.post("/verify/register/user", verifyRegisterUserController);


// login and logout routes
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);


authRouter.get("/test", slidingWindowRateLimit({
    options: {
        limit: 5,
        windowMs: 60 * 1000, // 1 minute
    },
    generateKey(req) {
        return `test:${req.ip}`;
    }
}), (req, res) => {
    res.status(200).json({
        message: "Test route is working fine",
    });
})