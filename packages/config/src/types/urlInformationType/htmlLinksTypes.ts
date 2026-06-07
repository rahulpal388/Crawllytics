


/*
    => this all can be found when analyzing the URL
    // brokenInternalLinksCount: number;
    // inboundInternalLinks: number;
    // crawlDepth: number;
    // isOrphan: boolean;
    // discoveredVia: DiscoveredViaType;
    // internalPageRankScore: number;

*/

export type InternalLinkType = {
    url: string;
    anchorText: string;
    isImage: boolean;
    altText: string | null;
    relAttributes: string;
    isDoFollow: boolean;
}


export type ExternalLinkType = {
    url: string;
    anchorText: string;
    isImage: boolean;
    altText: string | null;
    relAttributes: string;
    isNoFollow: boolean;
    isSponsored: boolean;
    isUGC: boolean;
    domain: string | null;
}



export type HTMLLinksType = {
    internalLinks: InternalLinkType[];
    externalLinks: ExternalLinkType[];
    totalLinksCount: number;
    emptyAnchorTextCount: number;
    imageAnchorCount: number;
    nofollowInternalCount: number;
}

export type DiscoveredViaType = 'link' | 'sitemap' | 'manual'

export type AnchorFreq = {
    text: string;
    count: number;
}