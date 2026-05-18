

export type InternalLinkType = {
    url: string;
    anchorText: string;
    isBroken: string
}

export type ExternalLinkType = {
    url: string;
    anchorText: string;
    relAttributes: string;
    domain: string;
    isBroken: boolean
}

export type HTMLLinksType = {
    internalLinks: InternalLinkType[];
    externalLinks: ExternalLinkType[];

}