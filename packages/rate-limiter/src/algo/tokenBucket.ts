
import { RateLimitReturnType } from "..//types/RateLimiteReturnType";
import { TokenBucketPolicyType } from "..//types/tokenBucketType";
import { HashesStoreConfig } from "@repo/queue/stores/hashesStore";

export class TokenBucket {


    constructor(
        private readonly hashesStore: ReturnType<typeof HashesStoreConfig>
    ) { }


    async consume(key: string, policy: TokenBucketPolicyType): Promise<RateLimitReturnType> {

        return {
            allowed: false,
            remaining: 0,
            retryAfter: 0,
            resetAfter: 0
        }

    }


};