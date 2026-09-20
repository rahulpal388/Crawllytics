export type RateLimiterKeyDimension = "ip" | "email" | "token";
interface CreateRateLimiterKeyOptions {
  resource: string;
  action: string;
  dimension: RateLimiterKeyDimension;
  identifier: string;
}

export function createRateLimiterKey({
  resource,
  action,
  dimension,
  identifier,
}: CreateRateLimiterKeyOptions) {
  return ["rate-limiter", resource, action, dimension, identifier].join(":");
}
