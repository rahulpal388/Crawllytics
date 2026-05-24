import { consumer } from "@/consumer.js";
import { crawler } from "@/crawler.js";
import { validateEnv } from "@/utils/validateEnv.js";
import { createRedisConnection } from "@repo/queue/queue";
import { generateSetKey, isMemberOfSet } from "@repo/queue/set";
import { generateHashKey, increaseDomainStatsValue, isCrawlCompleted } from "@repo/queue/hashes";
import "dotenv/config"
import { produce } from "@/produce.js";
import { connectDB } from "@repo/db/index";
import { GatherPageInformationModel } from "@repo/db/model/gatherPageInformation";
import { GatherInformationModel } from "@repo/db/model/gatherInformation";



validateEnv();

export const redisClient = await createRedisConnection({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    username: process.env.REDIS_USERNAME
})


let count = 0;
let init = true;

async function main() {
    let lastId = "$"

    const dbClient = await connectDB(process.env.DATABASE_URL);
    if (!dbClient) {
        console.error("Failed to connect to the database");
        process.exit(1);
    }

    while (true) {
        const res = await consumer({ key: "crawl:url", id: lastId });

        if (!res) {
            continue;
        }

        lastId = res.messages[0]?.id || "$";
        const url = res.messages[0]?.message.url
        const id = res.messages[0]?.message.id
        let visitedSetKey = res.messages[0]?.message.visitedSetKey
        let domainStatsKey = res.messages[0]?.message.domainStatsKey
        const crawlDepth = res.messages[0]?.message.crawlDepth
        if (url) {
            const urlObj = new URL(url);
            const { internalLinks, success, crawledData } = await crawler(urlObj);

            //  ################### put the gather information from crawled url to DB ###################

            if (success) {
                const gatherPageInformation = await GatherPageInformationModel.create({
                    gatherInformationId: id,
                    networkInformation: crawledData.networkInformation,
                    headerInformation: crawledData.headerInformation,
                    contentInformation: crawledData.contentInformation,
                    mediaInformation: crawledData.mediaInformation,
                    linkInformation: crawledData.linkInformation
                });

                await GatherInformationModel.findByIdAndUpdate(id, {
                    $push: { pages: gatherPageInformation._id }
                })


            }


            if (!domainStatsKey) {
                domainStatsKey = generateHashKey(urlObj.hostname);
            }

            await increaseDomainStatsValue({
                client: redisClient,
                key: domainStatsKey,
                field: "totalUrlsCrawled",
                incValue: 1
            })

            if (init) {
                console.log(`Internal Links: ${internalLinks.length}`);
                init = false;
            }
            count++;
            console.log(`Crawled URL: ${url} (${count})`);
            console.log(`visitedSetKey: ${visitedSetKey}, domainStatsKey: ${domainStatsKey}, crawlDepth: ${crawlDepth}`);
            if (crawlDepth && parseInt(crawlDepth) < 1) {
                for (const link of internalLinks) {


                    if (!visitedSetKey) {
                        visitedSetKey = generateSetKey(urlObj.hostname);
                    }


                    // ---------------- before putting check for duplicate url in redis ----------------
                    const isMember = await isMemberOfSet({
                        client: redisClient,
                        key: visitedSetKey || `urls:${urlObj.hostname}`,
                        value: link
                    });
                    if (isMember) {
                        continue;
                    }
                    await produce({
                        key: "crawl:url",
                        message: {
                            id,
                            url: link,
                            visitedSetKey,
                            domainStatsKey,
                            crawlDepth: (parseInt(crawlDepth) + 1).toString()
                        }
                    })

                    // ---------------- update the totalUrls count in redis ----------------
                    await increaseDomainStatsValue({
                        client: redisClient,
                        key: domainStatsKey || `domain:${urlObj.hostname}:stats`,
                        field: "totalUrls",
                        incValue: 1
                    })
                }

            }

            // ---------------- check does the crawling is completed for the domain ------------------
            const isCompleted = await isCrawlCompleted({
                client: redisClient,
                key: domainStatsKey || `domain:${urlObj.hostname}:stats`
            })

            if (isCompleted) {
                console.log(`Crawling completed for domain: ${urlObj.hostname}`);

                // ####################### put the message to another redis stream for completed crawling domain #######################

                // ####################### delete the keys related to the domain from redis #######################
                // ####################### delete the redis set which is storing the visited urls for the domain #######################

            }
        }





    }
}




main();

