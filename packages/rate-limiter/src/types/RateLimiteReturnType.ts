export type RateLimitReturnType = {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
  resetAfter: number;
};

export interface RateLimitAlgorithm<TPolicy> {
  consume(key: string, policy: TPolicy): Promise<RateLimitReturnType>;
}
