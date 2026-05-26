import { htmlHeaderExtractor } from "@/extractor/htmlHeader.js";
import { htmlContentsExtractor } from "@/extractor/htmlContents.js";
import { htmlLinksExtractor } from "@/extractor/htmlLinks.js";
import { htmlMediaExtractor } from "@/extractor/htmlMediaExtractor.js";
import { fetchWebPage } from "@/fetchWebPage.js";
import { eachUrlNetwork } from "@/networkAnalyses/eachUrlNetwork.js";
import { EachUrlNetworkResultTypes } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import { HTMLLinksType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { HTMLContentsType } from "@repo/config/types/urlInformationType/htmlContentsTypes";


type gatherPageData = {
    networkInformation: EachUrlNetworkResultTypes,
    headerInformation: HTMLHeaderType,
    contentInformation: HTMLContentsType,
    mediaInformation: HTMLMediaTypes,
    linkInformation: HTMLLinksType,
}

export async function crawler(url: URL): Promise<{
    success: true;
    internalLinks: string[]
    crawledData: gatherPageData
} | {
    success: false;
    internalLinks: []
    crawledData: null

}> {
    const { success, data } = await fetchWebPage(url);
    if (!success) {
        return {
            success: false,
            internalLinks: [],
            crawledData: null
        };
    }

    const urlNetworkAnalyses = eachUrlNetwork(data.response);
    const htmlLinks = htmlLinksExtractor(data.html, url);
    const htmlContents = htmlContentsExtractor(data.html);
    const mediaInfo = htmlMediaExtractor(data.html);
    const htmlHeader = htmlHeaderExtractor(data.html, url.href);

    // console.log(urlNetworkAnalyses);
    // console.log(htmlLinks);
    // console.log(htmlContents);
    // console.log(mediaInfo);
    // console.log(htmlHeader);

    return {
        success: true,
        internalLinks: htmlLinks.internalLinks.slice(0, 10).map((link) => link.url), // htmlLayedData.links.internal,
        crawledData: {
            networkInformation: urlNetworkAnalyses,
            headerInformation: htmlHeader,
            contentInformation: htmlContents,
            mediaInformation: mediaInfo,
            linkInformation: htmlLinks,
        }
    }
}

