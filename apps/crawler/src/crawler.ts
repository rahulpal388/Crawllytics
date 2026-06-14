import { htmlHeaderExtractor } from "@/extractor/htmlHeader.js";
import { htmlContentsExtractor } from "@/extractor/htmlHeadingContents.js";
import { htmlLinksExtractor } from "@/extractor/htmlLinks.js";
import { htmlMediaExtractor } from "@/extractor/htmlMediaExtractor.js";
import { fetchWebPageAndNetworkInfo } from "@/fetchWebPageAndNetworkInfo.js";
;
import { EachUrlNetworkResultTypes } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";
import { HTMLHeaderType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";
import { HTMLMediaTypes } from "@repo/config/types/urlInformationType/htmlMediaTypes";
import { HTMLLinksType } from "@repo/config/types/urlInformationType/htmlLinksTypes";
import { HTMLHeadingContentsType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";



type gatherPageData = {
    networkInformation: EachUrlNetworkResultTypes,
    headerInformation: HTMLHeaderType,
    contentInformation: HTMLHeadingContentsType,
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
    // const { success, data } = await fetchWebPageAndNetworkInfo(url);
    // if (!success) {
    //     return {
    //         success: false,
    //         internalLinks: [],
    //         crawledData: null
    //     };
    // }



    return {
        success: false,
        internalLinks: [],
        crawledData: null
    }
}

