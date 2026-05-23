import { htmlHeaderExtractor } from "@/extractor/htmlHeader.js";
import { htmlHeadingExtractor } from "@/extractor/htmlHeadings.js";
import { htmlLinksExtractor } from "@/extractor/htmlLinks.js";
import { htmlMediaExtractor } from "@/extractor/htmlMediaExtractor.js";
import { fetchWebPage } from "@/fetchWebPage.js";
import { eachUrlNetwork } from "@/networkAnalyses/eachUrlNetwork.js";




export async function crawler(url: URL): Promise<{
    internalLinks: string[]
}> {
    const { success, data } = await fetchWebPage(url);
    if (!success) {
        return {
            internalLinks: []
        };
    }

    const urlNetworkAnalyses = eachUrlNetwork(data.response);
    const htmlLinks = htmlLinksExtractor(data.html, url);
    const htmlHeadings = htmlHeadingExtractor(data.html);
    const mediaInfo = htmlMediaExtractor(data.html);
    const htmlHeader = htmlHeaderExtractor(data.html, url.href);

    // console.log(urlNetworkAnalyses);
    // console.log(htmlLinks);
    // console.log(htmlHeadings);
    // console.log(mediaInfo);
    // console.log(htmlHeader);

    return {
        internalLinks: htmlLinks.internalLinks.map((link) => link.url), // htmlLayedData.links.internal,
    }
}

