import { StreamGroupKeys, StreamKeys, StreamMessageMap } from '../types/streamTypes.js';
import { StreamReturnType } from '../types/streamReturnType.js';
import { RedisClientType } from "redis";



type ConsumerOptionsType<T extends StreamKeys> = {
    redisClient: RedisClientType;
    key: T;
    group: StreamGroupKeys;
    consumer: string;
}



export async function consumeFromGroup<T extends StreamKeys>({ redisClient, key, group, consumer }: ConsumerOptionsType<T>): Promise<StreamReturnType<T>[]> {
    const response = await redisClient.xReadGroup(
        group,
        consumer,
        {
            key,
            id: ">"
        }, {
        COUNT: 1,
        BLOCK: 0
    })

    if (!response || response.length === 0 || !response[0]) {
        return [];
    }
    return response[0].messages.map(msg => {
        return {
            id: msg.id,
            message: msg.message as StreamMessageMap[T]
        }
    })
}