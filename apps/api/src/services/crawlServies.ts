import { CrawlSeedUrlBody } from "@/validation/crawlSeedUrl.validation.js";
import { seedUrlRepository } from "@repo/db/repository/seedUrlRepository";
import { validUrl } from "@repo/lib/validUrl";
import { extractRobotsTxt } from "@repo/lib/extractRobotsTxt";
import { crawlStateSt, urlDeDuplicationStore } from "@/index.js";
import { crawlPublisher } from "@/index.js";
import { AppError } from "@/middlewares/errors/appError.js";
import { getSiteMapUrls } from "@/lib/getSiteMapUrls.js";

export const crawlServices = {
  startCrawl,
};

const MAX_CRAWL_DEPTH = 1;

async function startCrawl(body: CrawlSeedUrlBody) {
  const { url, depth, includeSiteMapXML, siteMapUrl } = body;

  const normalizedUrl = validUrl(url);

  if (!normalizedUrl) {
    throw new AppError("Invalid URL", 400);
  }

  // get the robots.txt file
  const robotsTxt = await extractRobotsTxt(normalizedUrl.origin);

  // siteMapXML urls if includeSiteMapXML is true
  const siteMapXMLUrls = includeSiteMapXML
    ? await getSiteMapUrls(siteMapUrl || normalizedUrl.origin + "/sitemap.xml")
    : [];

  // add info to the database
  const isSeedUrlExists = await seedUrlRepository.findByUrl(normalizedUrl.href);
  if (isSeedUrlExists) {
    throw new AppError("Seed URL already exists", 400);
  }
  const seedUrl = await seedUrlRepository.addSeedUrl({
    status: "created",
    seedUrl: normalizedUrl.href,
    robotsTxt: robotsTxt ? robotsTxt.userAgents : [],
    siteMapXMLUrls,
    siteMaps: robotsTxt ? robotsTxt.siteMapXMLUrls : [],
    urlCrawled: [],
    analyzedData: null,
  });

  // add the seed url to the deduplication store
  const urlDeDuplicationKey = urlDeDuplicationStore.generateKey(seedUrl._id.toString());
  await urlDeDuplicationStore.add(urlDeDuplicationKey, [normalizedUrl.href]);

  // store the info in redis

  const storeKey = crawlStateSt.generateKey(seedUrl._id.toString());

  await crawlStateSt.add(storeKey, {
    _id: seedUrl._id.toString(),
    seedUrl: normalizedUrl.href,
    deDuplicateId: urlDeDuplicationKey,
    status: "pending",
    discoveredUrls: 1,
    crawledUrls: 0,
    failedUrls: 0,
    maxDepth: MAX_CRAWL_DEPTH || 1,
    robotsTxt: robotsTxt ? robotsTxt : null,
  });

  // push the job to the queue
  await crawlPublisher.enqueue({
    _id: seedUrl._id.toString(),
    storeId: storeKey,
    deDuplicateId: urlDeDuplicationKey,
    seedUrl: normalizedUrl.href,
    url: normalizedUrl.href,
    maxDepth: MAX_CRAWL_DEPTH.toString(),
    depth: "0",
  });

  await seedUrlRepository.updateSeedUrlStatus(seedUrl._id, "queued");

  return {
    message: "Crawl job added to the queue",
    crawlId: seedUrl._id,
    storeId: storeKey,
    status: "queued",
  };
}
