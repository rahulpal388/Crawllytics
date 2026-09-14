
import { crawlProjectRequestType } from "@repo/contracts/apiContracts/project/crawl.request"
import { projectRepository } from "@repo/db/repository/projectRepository";
import { projectSettingRepository } from "@repo/db/repository/projectSettingRepository"
import { extractRobotsTxt } from "@/lib/extractRobotTxt.js";
import { ApiError } from "@/shared/error/apiError.js";
import { crawlPublisher, crawlStore } from "@/app/server.js";
import { ApiResponseType } from "@repo/contracts/apiContracts/apiResponse/apiResponseTemplete";




/*
*   Rules of start crawling :
    1. Next crawl can happen after 5 days or one week of previous crawl
    2. Fix the max-depth of crawling [ around 1-2 ]
    3. OR Fix the max number of pages to be crawled [ around 100-200 ]
*   After checking the Rules :
    1. Get the project setting and fetch the robotTxt and siteMap 
    2. Store the crawl information and important setting  in redis hash store  
    3. Add the url in the redis stream
*/



const NEXT_CRAWL_INTERVAL = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds


class CrawlService {

    async start(data: crawlProjectRequestType): Promise<ApiResponseType> {
        const isCrawlerRunning = await crawlStore.get(data.projectId.toString());

        if (isCrawlerRunning) {
            throw ApiError.crawlAlreadyRunning(crawlStore.getKey(data.projectId.toString()));
        }



        const project = await projectRepository.getProjectById(data.projectId);
        const projectSetting = await projectSettingRepository.getByProjectId(data.projectId);

        if (!project || !projectSetting) {
            throw ApiError.projectNotFound(data.projectId.toString());
        }

        // check the last crawl

        if (project.nextCrawlAt && project.nextCrawlAt > new Date()) {
            throw ApiError.crawlLimitReached(5, `Next crawl can be done after ${project.nextCrawlAt.toISOString()}`);
        }

        // fetch the robots.txt urls and format and store in crawlInfoStore
        const robotTxt = await extractRobotsTxt(projectSetting.robotsTxtUrls, project.domain);



        await crawlStore.set(data.projectId.toString(), {
            projectId: project._id.toString(),
            isGatheredDomainInfo: false,
            status: "in-progress",
            linkInfo: {
                limit: {
                    type: projectSetting.crawlLimit.type,
                    value: projectSetting.crawlLimit.value,
                    currentValue: projectSetting.crawlLimit.type === "depth" ? 0 : 1
                },
                totalUrl: 1,
                crawledUrl: 0,
            },
            userAgentInfo: robotTxt
        })

        await crawlPublisher.enqueue({
            projectId: project._id.toString(),
            storeId: crawlStore.getKey(data.projectId.toString()),
            type: "domain",
            url: project.domain,
            limit: {
                type: projectSetting.crawlLimit.type,
                currValue: projectSetting.crawlLimit.type === "depth" ? 0 : 1
            }
        })

        return {
            success: true,
            message: `Crawl started for project ${project._id.toString()}`,
        }
    }

}


const crawlService = new CrawlService();
export default crawlService;