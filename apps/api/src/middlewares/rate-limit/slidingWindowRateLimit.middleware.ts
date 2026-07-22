
import { slidingWindow } from "@/index.js";
import { SlidingWindowPolicyType } from "@repo/rate-limiter/types/silidingWindowPolicy";
import { NextFunction, Request, Response } from "express";

export function slidingWindowRateLimit({ options, generateKey }: {
    options: SlidingWindowPolicyType;
    generateKey(req: Request): string;
}) {

    return async function (req: Request, res: Response, next: NextFunction) {
        const key = generateKey(req);

        const result = await slidingWindow.consume(key, options);

        res.setHeader("RateLimit-Limit", options.limit);
        res.setHeader("RateLimit-Remaining", result.remaining);
        res.setHeader("RateLimit-Retry-After", result.retryAfter);
        res.setHeader("RateLimit-Reset-After", result.resetAfter);

        if (!result.allowed) {
            return res.status(429).json({
                message: "Too many requests. Please try again later.",
                retryAfter: result.retryAfter,
            });
        }

        next();

    }

}