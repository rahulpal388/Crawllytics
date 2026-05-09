import { HtmlLayerDataExtactor } from "./extractor/htmlLayerDataExtractor";
import { fetchWebPage } from "./fetchWebPage";
import { eachUrlNetwork } from "./networkAnalyses/eachUrlNetwork";
import { EachUrlNetworkResultTypes } from "./types/eachUrlNetwork.types";

// this store only the url, it has to crawl 
const frontierQueue = new Set<string>();



const MAX_CRAWL_DEPTH = 1;


frontierQueue.add("https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler")
// frontierQueue.add("https://raw.githubusercontent.com/")
// frontierQueue.add("https://github.com/search?q=react")




const start = performance.now();
async function crawlerHandler(crawlUrl: string) {
    console.log("starting crawling the url")
    const urlNetworkAnalyses: EachUrlNetworkResultTypes[] = [];
    const mainUrl = new URL(crawlUrl);
    const { internalLinks, eachUrlNetworkAnalyses } = await crawler(mainUrl);
    urlNetworkAnalyses.push(eachUrlNetworkAnalyses!)
    console.log(`done ${crawlUrl}`)

    const urlQueue = new Set<string>(internalLinks);
    console.log(`total url to crawl is ${urlQueue.size}`)
    let i = 1;
    for (const url of urlQueue) {
        console.log(`${i} ${url}`)
        const { eachUrlNetworkAnalyses } = await crawler(new URL(url));
        if (eachUrlNetworkAnalyses) {
            urlNetworkAnalyses.push(eachUrlNetworkAnalyses);
        }
        i++;
        console.log(`done ${i - 1} ${url}`)
    }
    console.log("url has been crawled")

    console.log(...urlNetworkAnalyses)

    console.log("total crawl time", performance.now() - start)
}



async function crawler(url: URL): Promise<{
    internalLinks: string[]
    eachUrlNetworkAnalyses?: EachUrlNetworkResultTypes
}> {
    const { success, data } = await fetchWebPage(url);
    if (!success) {
        return {
            internalLinks: []
        };
    }

    const urlNetworkAnalyses = eachUrlNetwork(data.response);

    // ⚠️ check the crawability of the url and set the crawlability in requestLayedData
    const htmlLayedData = HtmlLayerDataExtactor(data.html, url);
    return {
        internalLinks: htmlLayedData.links.internal,
        eachUrlNetworkAnalyses: urlNetworkAnalyses
    }
}


const urlToCrawl = frontierQueue.values().next().value
if (urlToCrawl) {
    crawlerHandler(urlToCrawl)
}
