
import { crawlPublisherConfig } from "@repo/redis/streams/publishers/crawlPublisher";
import { emailPublisherConfig } from "@repo/redis/streams/publishers/emailPublisher";
import { HashStoreConfig } from "@repo/redis/stores/hashStore";
import { sortedSetStoreConfig } from "@repo/redis/stores/sortedSetStore";
import { RedisClientType } from "redis";
import { SetStoreConfig } from "@repo/redis/stores/setStore"



export function initilizeRedisStores(redisClient: RedisClientType) {
    return {

        setStore: SetStoreConfig(redisClient),

        crawlPublisher: crawlPublisherConfig(redisClient),

        emailPublisher: emailPublisherConfig(redisClient),



        sortedSetStore:
            sortedSetStoreConfig(redisClient),

        hashStore:
            HashStoreConfig(redisClient),
    }

}