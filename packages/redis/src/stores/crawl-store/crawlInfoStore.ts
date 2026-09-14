
import { STREAM_GROUPS, STREAMS } from "@/types/streamTypes.js";
import { CrawlInfoStoreStatusType, CrawlInfoStoreType } from "../../types/crawlStreamMessageType.js";
import { RedisClientType } from 'redis';


export class crawlInfoStoreConfig {
    constructor(
        private redisClient: RedisClientType
    ) { }

    getKey(projectId: string) {
        return `crawl:info:${projectId}`;
    }

    async get(projectId: string): Promise<CrawlInfoStoreType | null> {
        const storeKey = this.getKey(projectId);
        const data = await this.redisClient.hGetAll(storeKey);

        if (Object.keys(data).length === 0) {
            return null;
        }

        if (!data.projectId || !data.status || !data.linkInfo || !data.userAgentInfo) {
            throw new Error(`Invalid data in crawl info store for projectId: ${projectId}`);
        }

        return {
            projectId: data.projectId,
            isGatheredDomainInfo: data.isGatheredDomainInfo === 'true',
            status: data.status as CrawlInfoStoreStatusType,
            linkInfo: JSON.parse(data.linkInfo),
            userAgentInfo: JSON.parse(data.userAgentInfo)
        };


    }

    async set(projectId: string, data: CrawlInfoStoreType) {
        const key = this.getKey(projectId);

        return await this.redisClient.hSet(key, {
            ...data,
            isGatheredDomainInfo: data.isGatheredDomainInfo.toString(),
            linkInfo: JSON.stringify(data.linkInfo),
            userAgentInfo: JSON.stringify(data.userAgentInfo)

        })
    }

    async isGatheredDomainInfo(projectId: string): Promise<boolean> {
        const storeKey = this.getKey(projectId);
        const isGatheredDomainInfo = await this.redisClient.hGet(storeKey, 'isGatheredDomainInfo');
        return isGatheredDomainInfo === 'true';
    }


}
