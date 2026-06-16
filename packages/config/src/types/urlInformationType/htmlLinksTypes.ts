


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
