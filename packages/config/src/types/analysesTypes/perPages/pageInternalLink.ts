export type PageInternalLinkAnalysis = {
    internalLinkCount: number;
    uniqueInternalLinks: number;
    incomingInternalLinks: number;
    deadEndPage: boolean;

    clickDepth: number;
    urlDepth: number;

}