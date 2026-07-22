


export type RateLimitReturnType = {
    allowed: boolean;
    remaining: number;
    retryAfter: number;
    resetAfter: number;
}

export interface RateLimiter<TConfig> {
    consume(
        key: string,
        config: TConfig
    ): Promise<RateLimitReturnType>;
}