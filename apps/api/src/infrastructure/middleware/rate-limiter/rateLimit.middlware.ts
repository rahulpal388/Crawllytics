import { SlidingWindowPolicyType } from "@repo/rate-limiter/types/silidingWindowPolicy";
import { Request, Response, NextFunction } from "express";
import { RateLimitAlgorithm } from "@repo/rate-limiter/types/RateLimiteReturnType";

export type RateLimitRule<TPolicy> = {
  key: (req: Request) => string;
  policy: TPolicy;
};

export function RateLimitMiddleware<TPolicy>(
  algorithm: RateLimitAlgorithm<TPolicy>,
  rules: RateLimitRule<TPolicy>[],
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const rule of rules) {
      const key = rule.key(req);
      const policy = rule.policy;
      const result = await algorithm.consume(key, policy);
      if (!result.allowed) {
        res.setHeader("Retry-After", result.retryAfter);
        return res.status(429).json({
          message: "Too many requests",
          retryAfter: result.retryAfter,
        });
      }
    }

    next();
  };
}
