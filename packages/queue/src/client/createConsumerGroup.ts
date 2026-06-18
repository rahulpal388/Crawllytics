import { StreamKeys, StreamGroupKeys } from "../types/streamTypes.js";
import { RedisClientType } from "redis";



type CreateGroupOptionsType<T extends StreamKeys> = {
    redisClient: RedisClientType;
    key: T;
    group: StreamGroupKeys
}


export async function createConsumerGroup({ redisClient, key, group }: CreateGroupOptionsType<StreamKeys>) {
    try {
        await redisClient.xGroupCreate(
            key,
            group,
            "$",
            { MKSTREAM: true }
        );
    } catch (error: any) {
        if (error.message.includes("BUSYGROUP")) {
            return;
        }

        throw error;
    }

}