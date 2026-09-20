import { crawlInfoStore, crawlPublisher } from "@/index.js";
import { CrawlStreamMessageType } from "@repo/redis/types/crawlStreamMessageType";
import { urlDuplicateStore } from "@/index.js";

export async function addUrlToStream(internalUrl: Set<string>, msg: CrawlStreamMessageType) {
  /*
   *   Check rules :
   *   1. Check if the URL is already crawled or not
   *   2. check for limit either depth or pages
   */

  for (const url of internalUrl) {
    const crawlStore = await crawlInfoStore.get(msg.projectId);
    if (!crawlStore) {
      throw new Error(`Crawl info store not found for projectId: ${msg.projectId}`);
    }
    const isCrawled = await urlDuplicateStore.isMember(msg.projectId, url);
    if (isCrawled) {
      continue;
    }

    /*
     *   check the limit either by pages or depth
     */
    if (msg.limit.type === "depth" && msg.limit.currValue >= crawlStore.linkInfo.limit.value) {
      continue;
    }

    if (
      msg.limit.type === "pages" &&
      crawlStore.linkInfo.totalUrl >= crawlStore.linkInfo.limit.value
    ) {
      continue;
    }
    const currValue =
      msg.limit.type === "depth" ? msg.limit.currValue + 1 : crawlStore.linkInfo.totalUrl + 1;
    // add the url to stream
    await crawlPublisher.enqueue({
      projectId: msg.projectId,
      storeId: msg.storeId,
      type: msg.type,
      url,
      limit: {
        type: msg.limit.type,
        currValue,
      },
    });

    // add the url to urlDuplicateStore
    await urlDuplicateStore.add(msg.projectId, [url]);

    // update the totalUrls in crawlInfoStore

    await crawlInfoStore.updateTotalUrls(msg.projectId, 1);
  }
}
