import { htmlHeaderExtractor } from "@/extractor/htmlHeader.js";
import { htmlContentsExtractor } from "@/extractor/htmlContents.js";
import { htmlLinksExtractor } from "@/extractor/htmlLinks.js";
import { htmlMediaExtractor } from "@/extractor/htmlMediaExtractor.js";
import { fetchWebPage } from "@/fetchWebPage.js";
import { eachUrlNetwork } from "@/networkAnalyses/eachUrlNetwork.js";
import { ContentInformationType } from "@repo/db/schema/contentInformation.schema";
import { EachUrlNetworkResultTypes } from "@/types/eachUrlNetworkTypes.js";
import { HTMLHeaderType } from "@/types/htmlHeaderResponseTypes.js";
import { HTMLMediaTypes } from "@/types/htmlMediaTypes.js";
import { HTMLLinksType } from "@/types/htmlLinksTypes.js";

type gatherPageData = {
    networkInformation: EachUrlNetworkResultTypes,
    headerInformation: HTMLHeaderType,
    contentInformation: ContentInformationType,
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
        internalLinks: htmlLinks.internalLinks.map((link) => link.url), // htmlLayedData.links.internal,
        crawledData: {
            networkInformation: urlNetworkAnalyses,
            headerInformation: htmlHeader,
            contentInformation: htmlContents,
            mediaInformation: mediaInfo,
            linkInformation: htmlLinks,
        }
    }
}

