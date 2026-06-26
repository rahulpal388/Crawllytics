import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageInternalLinkAnalysis } from "@repo/config/types/analysesTypes/perPages/pageInternalLink"

export function internalLink(gatherInfo: GatherInfoType): PageInternalLinkAnalysis {
    let internalLinkCount = 0;
    let uniqueInternalLinks = 0;
    let incomingInternalLinks = 0;
    let outgoingInternalLinks = 0;
    let orphanPage = false;
    let brokenInternalLinks = 0

    internalLinkCount = gatherInfo.links.internalLinks.length;
    uniqueInternalLinks = new Set(gatherInfo.links.internalLinks).size;




    return {
        internalLinkCount,
        uniqueInternalLinks,
        incomingInternalLinks,
        outgoingInternalLinks,
        orphanPage,
        brokenInternalLinks
    };
}