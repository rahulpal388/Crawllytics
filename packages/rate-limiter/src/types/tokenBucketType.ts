

export type TokenBucketPolicyType = {
    refillRatePerSecond: number;
    limit: number;
    ttl: number;
}



export type TokenBucketType = {
    tokens: string;
    lastRefillTimestamp: string;
}