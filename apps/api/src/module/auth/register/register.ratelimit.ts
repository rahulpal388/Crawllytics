

import { RateLimitMiddleware } from "@/infrastructure/middleware/rate-limiter/rateLimit.middlware.js";
import { slidingWindowRateLimit } from "@/app/server.js";
import { authRateLimitKey } from "@/shared/security/rate-limiter/keys/auth.key.js";
import { authRateLimitPolicies } from "@/shared/security/rate-limiter/policy/auth.policy.js";
import { Request, Response, NextFunction } from "express";



export function registerRateLimit(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const midd = RateLimitMiddleware(
        slidingWindowRateLimit,
        [
            {
                key: authRateLimitKey.registerByIp,
                policy: authRateLimitPolicies.register
            },
            {
                key: authRateLimitKey.registerByEmail,
                policy: authRateLimitPolicies.register
            }
        ]
    )
    return midd(req, res, next);
}




export function verifyOtpRateLimit(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const midd = RateLimitMiddleware(
        slidingWindowRateLimit,
        [
            {
                key: authRateLimitKey.verifyOtpByIp,
                policy: authRateLimitPolicies.verifyOtp
            }

        ]
    )
    return midd(req, res, next);
}
