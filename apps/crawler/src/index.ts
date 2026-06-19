import { validateEnv } from "@/utils/validateEnv.js";
import "dotenv/config"
import { createRedisConnection } from "@repo/queue/client/client";
import { crawlConsumerConfig } from "@repo/queue/streams/consumers/crawlConsumer";
import { createConsumerGroup } from "@repo/queue/client/createConsumerGroup";
import { urlDeDuplication } from "@repo/queue/stores/deduplication/urlDeDuplication";
import { fetchWebPageAndNetworkInfo } from "@/fetchWebPageAndNetworkInfo.js";
import { RedirectChainType } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { getGatherInformation } from "@/gatherInformation.js";
import { urlCrawledRepository } from "@repo/db/repository/urlCrawledRepository";
import { crawlStateStore } from "@repo/queue/stores/crawlState/crawlState";
import { crawlPublisherConfig } from "@repo/queue/streams/publishers/crawlPublisher";
import { isUrlCrawlAllowed } from "@/utils/isUrlCrawlAllowed.js";
import { connectDB } from "@repo/db/index";
import { seedUrlRepository } from "@repo/db/repository/seedUrlRepository";

const env = validateEnv();

// ##################################################
// DB connection setup
// ##################################################
const dbConnect = await connectDB(env.DATABASE_URL);
if (!dbConnect) {
    console.error("Failed to connect to the database. Exiting...");
    process.exit(1);
}



// ##################################################
// Redis connection and stream setup
// ##################################################

export const redisClient = await createRedisConnection({
    url: env.REDIS_URL,
    password: env.REDIS_PASSWORD,
    username: env.REDIS_USERNAME
})

await createConsumerGroup({
    redisClient,
    key: "crawl_stream",
    group: "crawl_stream_group"
});

const crawlConsumer = crawlConsumerConfig(redisClient, "worker-1");


export const urlDeDuplicateStore = urlDeDuplication(redisClient);
export const urlCrawledSt = crawlStateStore(redisClient);
export const crawlPublisher = crawlPublisherConfig(redisClient);


async function main() {

    while (true) {
        const message = await crawlConsumer.consume();
        if (!message || message.length === 0 || !message[0]?.message) {
            continue;
        }
        console.log("Message Received");
        const msg = message[0].message;


        // ##################################################
        // fetch the content of URL
        // ##################################################
        const redirectChain: RedirectChainType[] = [];
        const url = new URL(msg.url);
        const { success, data } = await fetchWebPageAndNetworkInfo(url, redirectChain);

        if (!success) {
            // failed to fetch 
            // update the crawl failure in crawlStore

            continue;
        }


        // ##################################################
        // gather the information from the fetched content
        // ##################################################

        const html = data.html;
        const gatherInfo = await getGatherInformation(html, url);

        // ##################################################
        //  store the gathered information in the database
        // ##################################################

        const urlCrawled = await urlCrawledRepository.addUrlCrawled({
            networkInfo: data.eachUrlNetwork,
            ...gatherInfo,
            analyzedUrlData: null
        })

        if (!urlCrawled.success || !urlCrawled.data) {
            // error while storing the crawled data in database
            // put the url back again to the stream

            continue;
        }

        await seedUrlRepository.updateUrlCrawled(msg._id, urlCrawled.data._id);


        // ##################################################
        //  update the crawlStatus store
        // ##################################################

        await urlCrawledSt.incCrawledUrls(msg.storeId);


        // ##################################################
        //  put the unqiue crawable internal links back to      stream 
        //  and update the deduplication store
        // ##################################################

        for (const link of gatherInfo.links.internalLinks) {
            // check for url depth
            if (parseInt(msg.depth) >= parseInt(msg.maxDepth)) {
                continue;
            }

            const isDuplicate = await urlDeDuplicateStore.isMember(msg.deDuplicateId, link.url);

            if (isDuplicate) {
                continue;
            }

            // get robotsTxt
            const robotTxt = await urlCrawledSt.get(msg.storeId);

            if (!robotTxt || !robotTxt.robotsTxt) {
                continue;
            }

            const isCrawlable = isUrlCrawlAllowed(link.url, robotTxt.robotsTxt.userAgents);

            if (!isCrawlable) {
                // this url is not allow to crawl by robots.txt
                continue;
            }

            await urlCrawledSt.incDiscoveredUrls(msg.storeId);

            await crawlPublisher.enqueue({
                ...msg,
                url: link.url,
                depth: (parseInt(msg.depth) + 1).toString()
            })

        }



        // ##################################################
        //  check completion of crawl of seed URL
        // ##################################################

        const isComplete = await urlCrawledSt.isComplete(msg.storeId);

        if (isComplete) {
            console.log(`Crawl completed for seed URL: ${msg.seedUrl}`);
        }

    }

}






await main();
