import { Request, Response, NextFunction } from "express";
import { RateLimitMiddleware } from "@/infrastructure/middleware/rate-limiter/rateLimit.middlware.js";
import { slidingWindowRateLimit } from "@/app/server.js";
import { authRateLimitKey } from "@/shared/security/rate-limiter/keys/auth.key.js";
import { authRateLimitPolicies } from "@/shared/security/rate-limiter/policy/auth.policy.js";

/*
 *   LoginRateLimit : using both IP and Email as key to limit the login attempts
 */

export function loginRateLimit(req: Request, res: Response, next: NextFunction) {
  const midd = RateLimitMiddleware(slidingWindowRateLimit, [
    {
      key: authRateLimitKey.loginByIp,
      policy: authRateLimitPolicies.loginIp,
    },
    {
      key: authRateLimitKey.loginByEmail,
      policy: authRateLimitPolicies.loginEmail,
    },
  ]);

  return midd(req, res, next);
}
