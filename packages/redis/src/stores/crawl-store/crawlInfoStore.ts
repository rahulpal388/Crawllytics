
import { STREAM_GROUPS, STREAMS } from "@/types/streamTypes.js";
import { CrawlInfoStoreStatusType, CrawlInfoStoreType, LinkInfoType } from "../../types/crawlStreamMessageType.js";
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

    async updateIsGatheredDomainInfo(projectId: string, isGathered: boolean): Promise<void> {
        const storeKey = this.getKey(projectId);
        await this.redisClient.hSet(storeKey, 'isGatheredDomainInfo', isGathered.toString());
    }

    async updateTotalUrls(projectId: string, incBy: number) {
        const storeKey = this.getKey(projectId);
        const linkInfoStr = await this.redisClient.hGet(storeKey, 'linkInfo');
        if (!linkInfoStr) {
            throw new Error(`Link info not found for projectId: ${projectId}`);
        }
        let linkInfo: LinkInfoType = JSON.parse(linkInfoStr);
        linkInfo.totalUrl += incBy;


        return await this.redisClient.hSet(storeKey, 'linkInfo', JSON.stringify(linkInfo));
    }

    async updateCrawledUrls(projectId: string, incBy: number) {
        const storeKey = this.getKey(projectId);
        const linkInfoStr = await this.redisClient.hGet(storeKey, 'linkInfo');
        if (!linkInfoStr) {
            throw new Error(`Link info not found for projectId: ${projectId}`);
        }
        let linkInfo: LinkInfoType = JSON.parse(linkInfoStr);
        linkInfo.crawledUrl += incBy;

        return await this.redisClient.hSet(storeKey, 'linkInfo', JSON.stringify(linkInfo));
    }

}
