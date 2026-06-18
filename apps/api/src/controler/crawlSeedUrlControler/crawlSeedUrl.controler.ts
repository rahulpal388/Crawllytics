import { Request, Response, NextFunction } from "express"
import { AppError } from "@/middlewares/errors/appError.js"
import { z } from "zod";
import { seedUrlRepository } from "@repo/db/repository/seedUrlRepository";
import { extractRobotsTxt } from "@repo/lib/extractRobotsTxt";
import { validUrl } from "@repo/lib/validUrl";
import { crawlStateSt } from "@/index.js"
import { crawlPublisher } from "@/index.js"



const crawlSeedUrlBodySchema = z.object({
    url: z.string(),
    depth: z.number().int().positive().max(3).optional()
})

export async function crawlSeedUrl(req: Request, res: Response, next: NextFunction) {
    const { data, success, error } = crawlSeedUrlBodySchema.safeParse(req.body);

    if (!success) {
        return next(new AppError("Invalid request body", 400));
    }

    const url = validUrl(data.url);

    if (!url) {
        return next(new AppError("Invalid URL", 400));
    }

    // get the robotstxt and siteMapXML

    const robotsTxt = await extractRobotsTxt(url.origin);


    // add the seedUrl to DB
    const seedUrl = await seedUrlRepository.addSeedUrl({
        status: false,
        robotsTxt: robotsTxt?.userAgents || [],
        siteMapXMLUrls: robotsTxt?.siteMapXMLUrls || [],
        urlCrawled: [],
        analyzedData: null
    })

    // store it in redis crawlStateStore

    const crawlStoreKey = crawlStateSt.generateKey(seedUrl._id)

    const storeId = await crawlStateSt.add(crawlStoreKey, {
        _id: seedUrl._id.toString(),
        seedUrl: data.url,
        discoveredUrls: 0,
        crawledUrls: 0,
        status: "pending",
        failedUrls: 0,
        robotsTxt: robotsTxt || null
    })

    // push the seedUrl to the crawlQueue

    await crawlPublisher.enqueue({
        _id: seedUrl._id.toString(),
        storeId: storeId.toString(),
        seedUrl: data.url,
        url: data.url
    })



    res.status(200).json({
        message: "Crawl job added to the queue",
        _id: seedUrl._id,
        storeId
    })

}