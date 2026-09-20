import { Request, Response, NextFunction } from "express";
import { RateLimitMiddleware } from "@/infrastructure/middleware/rate-limiter/rateLimit.middlware.js";
import { slidingWindowRateLimit } from "@/app/server.js";
import { authRateLimitKey } from "@/shared/security/rate-limiter/keys/auth.key.js";
import { authRateLimitPolicies } from "@/shared/security/rate-limiter/policy/auth.policy.js";

export function forgetPasswordRateLimit(req: Request, res: Response, next: NextFunction) {
  const midd = RateLimitMiddleware(slidingWindowRateLimit, [
    {
      key: authRateLimitKey.forgetPasswordByIp,
      policy: authRateLimitPolicies.forgetPassword,
    },
    {
      key: authRateLimitKey.forgetPasswordByEmail,
      policy: authRateLimitPolicies.forgetPassword,
    },
  ]);

  return midd(req, res, next);
}

export function verifyForgetPasswordRateLimit(req: Request, res: Response, next: NextFunction) {
  const midd = RateLimitMiddleware(slidingWindowRateLimit, [
    {
      key: authRateLimitKey.verifyForgetPasswordByIp,
      policy: authRateLimitPolicies.forgetPassword,
    },
    {
      key: authRateLimitKey.verifyForgetPasswordByToken,
      policy: authRateLimitPolicies.verifyForgetPassword,
    },
  ]);
  console.log("verifyForgetPasswordRateLimit", "Middleware initialized");
  return midd(req, res, next);
}
