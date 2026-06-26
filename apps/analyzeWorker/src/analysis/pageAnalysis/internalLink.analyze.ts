import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageInternalLinkAnalysis } from "@repo/config/types/analysesTypes/perPages/pageInternalLink"

export function internalLink(gatherInfo: GatherInfoType): PageInternalLinkAnalysis {
    let internalLinkCount = 0;
    let uniqueInternalLinks = 0;
    let incomingInternalLinks = 0;
    let outgoingInternalLinks = 0;
    let deadEndPage = false;
    let clickDepth = 0;
    let urlDepth = 0;

    internalLinkCount = gatherInfo.links.internalLinks.length;
    uniqueInternalLinks = new Set(gatherInfo.links.internalLinks).size;
    outgoingInternalLinks = uniqueInternalLinks;

    deadEndPage = internalLinkCount === 0;
    clickDepth = gatherInfo.urlAnalyses.crawlDepth;
    urlDepth = gatherInfo.urlAnalyses.urlDepth;



    return {
        internalLinkCount,
        uniqueInternalLinks,
        incomingInternalLinks,
        deadEndPage,
        clickDepth,
        urlDepth,
    };
}