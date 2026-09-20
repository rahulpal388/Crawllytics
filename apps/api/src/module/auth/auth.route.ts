import { loginController } from "@/module/auth/login/login.controller.js";
import { registerController } from "@/module/auth/register/register.controller.js";
import { verifyRegistrationOTPController } from "@/module/auth/register/verifyRegistrationOTP.controller.js";
import { logoutController } from "@/module/auth/logout/logout.controller.js";
import { Router } from "express";
import { loginRateLimit } from "@/module/auth/login/login.ratelimit.js";
import {
  registerRateLimit,
  verifyOtpRateLimit,
} from "@/module/auth/register/register.ratelimit.js";

import { forgetPasswordController } from "@/module/auth/forget-password/forget-password.controller.js";
import { verifyForgetPasswordController } from "@/module/auth/forget-password/verify-forget-password.controller.js";
import {
  forgetPasswordRateLimit,
  verifyForgetPasswordRateLimit,
} from "@/module/auth/forget-password/forget-password.ratelimit.js";
import { googleController } from "@/module/auth/google/google.controller.js";
import { googleCallbackController } from "@/module/auth/google/googleCallback.controller.js";
import { AuthenticatedUserType } from "@/shared/types/authenticatedUserInfo.js";
import { Request } from "express";
import { authenticateMiddleware } from "@/infrastructure/middleware/authenticate.middleware.js";

const authRouter = Router();

authRouter.post("/login", loginRateLimit, loginController);
authRouter.post("/register", registerRateLimit, registerController);
authRouter.post("/register/verify-otp", verifyOtpRateLimit, verifyRegistrationOTPController);

authRouter.post("/password-reset", forgetPasswordRateLimit, forgetPasswordController);
authRouter.post(
  "/password-reset/verify",
  verifyForgetPasswordRateLimit,
  verifyForgetPasswordController,
);

/*
* TODO :
    1. Add the rate limiters for the google auth routes
*/

authRouter.get("/google", googleController);
authRouter.get("/google/callback", googleCallbackController);

//  logout user

authRouter.get("/logout", authenticateMiddleware, logoutController);

export default authRouter;
