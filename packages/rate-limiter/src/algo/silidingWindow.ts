import crypto from "node:crypto";

import { sortedSetStoreConfig } from "@repo/queue/stores/sortedSetStore";

import { RateLimitReturnType } from "../types/RateLimiteReturnType";
import { SlidingWindowPolicyType } from "../types/silidingWindowPolicy";

export class SlidingWindow {
    constructor(
        private readonly sortedSetStore: ReturnType<typeof sortedSetStoreConfig>
    ) { }

    async consume(
        key: string,
        policy: SlidingWindowPolicyType
    ): Promise<RateLimitReturnType> {
        const now = Date.now();
        const windowStart = now - policy.windowMs;

        // Remove expired requests
        await this.sortedSetStore.removeByScore(key, 0, windowStart);

        // Count requests currently in the window
        const currentCount = await this.sortedSetStore.count(key);

        // Oldest request in the current window
        const oldestEntry = await this.sortedSetStore.getOldestScore(key);
        const oldest = oldestEntry[0];

        const resetAfter = oldest
            ? Math.max(
                0,
                Math.ceil(
                    (oldest.score + policy.windowMs - now) / 1000
                )
            )
            : Math.ceil(policy.windowMs / 1000);

        // Rate limit exceeded
        if (currentCount >= policy.limit) {
            return {
                allowed: false,
                remaining: 0,
                retryAfter: resetAfter,
                resetAfter,
            };
        }

        // Record current request
        await this.sortedSetStore.add(
            key,
            now,
            crypto.randomUUID()
        );

        // Expire the key after the window
        await this.sortedSetStore.expire(
            key,
            Math.ceil(policy.windowMs / 1000)
        );

        return {
            allowed: true,
            remaining: policy.limit - currentCount - 1,
            retryAfter: 0,
            resetAfter,
        };
    }
}