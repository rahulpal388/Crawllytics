

export type InternalLinkType = {
    url: string;
    anchorText: string;
}

export type ExternalLinkType = {
    url: string;
    anchorText: string;
    relAttributes: string;
}

export type HTMLLinksType = {
    internalLinks: InternalLinkType[];
    externalLinks: ExternalLinkType[];

}