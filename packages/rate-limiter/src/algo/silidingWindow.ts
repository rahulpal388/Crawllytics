import crypto from "node:crypto";

import { sortedSetStoreConfig } from "@repo/redis/stores/sortedSetStore";

import { RateLimitReturnType, RateLimitAlgorithm } from "../types/RateLimiteReturnType";
import { SlidingWindowPolicyType } from "../types/silidingWindowPolicy";

export class SlidingWindow implements RateLimitAlgorithm<SlidingWindowPolicyType> {
  constructor(
    /*
     *  sortedSetStore is a Redis sorted set store that is used to keep track of the timestamps of requests made by a user.
     */
    private readonly sortedSetStore: ReturnType<typeof sortedSetStoreConfig>,
  ) {}

  async consume(key: string, policy: SlidingWindowPolicyType): Promise<RateLimitReturnType> {
    const now = Date.now();
    // get the starting time of the request
    const windowStart = now - policy.windowMs;

    /*
     *   Remove all requests that are outside the current window from the sorted set.
     *   This is done to ensure that we only count requests that are within the current window.
     */
    await this.sortedSetStore.removeByScore(key, 0, windowStart);

    /*
     *   Count requests currently in the window
     */
    const currentCount = await this.sortedSetStore.count(key);

    /*
     *   Oldest request in the current window
     *    This is used to calculate the time until the rate limit resets.
     */
    const oldestEntry = await this.sortedSetStore.getOldestScore(key);
    const oldest = oldestEntry[0];

    const resetAfter = oldest
      ? Math.max(0, Math.ceil((oldest.score + policy.windowMs - now) / 1000))
      : Math.ceil(policy.windowMs / 1000);

    /*
     *   Rate limit exceeded
     */
    if (currentCount >= policy.limit) {
      return {
        allowed: false,
        remaining: 0,
        retryAfter: resetAfter,
        resetAfter,
      };
    }

    /*
     *   Add the current request to the sorted set with a unique identifier to ensure that each request is counted separately.
     */
    await this.sortedSetStore.add(key, now, crypto.randomUUID());

    /*
     *   Expire the key after the window
     *   This is done to ensure that the sorted set does not grow indefinitely and consume unnecessary memory.
     *   No need to keep the key forever, as we only need to keep track of requests within the current window.
     */
    await this.sortedSetStore.expire(key, Math.ceil(policy.windowMs / 1000));

    return {
      allowed: true,
      remaining: policy.limit - currentCount - 1,
      retryAfter: 0,
      resetAfter,
    };
  }
}
