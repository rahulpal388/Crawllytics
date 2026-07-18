export type LinkType =
  "internal" | "external" | "same-page" | "mailto" | "tel" | "javascript" | "data" | "ftp" | string;

export type HTMLLinksType = {
  links: HTMLLinkType[];
};

export type HTMLLinkType = {
  url: string;
  absoluteUrl: string;
  anchorText: string;
  isImage: boolean;
  altText: string | null;
  relAttributes: string[];
  linkType: LinkType;
  target: "_blank" | "_self" | "_parent" | "_top" | null;
  title: string | null;
  hreflang: string | null;
  type: string | null;
  isInternal: boolean;
  isDoFollow: boolean;
  isSponsored: boolean;
  isUGC: boolean;
  isNoOpener: boolean;
  isNoReferrer: boolean;
  isDownload: boolean;
  domain: string | null;
  protocol: "http" | "https" | null;
  position: number;
  html: string;
};
