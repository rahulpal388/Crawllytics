

export type InternalLinkType = {
    url: string;
    anchorText: string;
    isImage: boolean;
    altText: string | null;
    relAttributes: string;
    isDoFollow: boolean;
    targetStatusCode: number | null;
    position: "nav" | "body" | "footer" | "sidebar";
}


export type ExternalLinkType = {
    url: string;
    anchorText: string;
    relAttributes: string;
    isNoFollow: boolean;
    isSponsored: boolean;
    isUGC: boolean;
    domain: string | null;
    targetStatusCode: number | null;
}



export type HTMLLinksType = {
    internalLinks: InternalLinkType[];
    externalLinks: ExternalLinkType[];
    totalLinksCount: number;
    uniqueInternalLinksCount: number;
    uniqueExternalLinksCount: number;
    emptyAnchorTextCount: number;
    genericAnchorCount: number;
    imageAnchorCount: number;
    brokenInternalLinksCount: number;
    nofollowInternalCount: number;
    anchorTextDistribution: AnchorFreq[];
    inboundInternalLinks: number;
    crawlDepth: number;
    isOrphan: boolean;
    discoveredVia: DiscoveredViaType;
    internalPageRankScore: number;
}

export type DiscoveredViaType = 'link' | 'sitemap' | 'manual'

export type AnchorFreq = {
    text: string;
    count: number;
}