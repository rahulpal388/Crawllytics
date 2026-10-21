
export type InternalLinkingType = {
  totalInternalLinks: number;
  totalUniqueInternalLinks: number;

  incomingLinks: number;
  outgoingLinks: number;
  uniqueReferringPages: number;
  uniqueDestinations: number;

  brokenInternalLinks: number;
  redirectingInternalLinks: number;
  redirectLoopLinks: number;

  orphanPage: boolean;
  unreachablePage: boolean;
  sitemapOnlyPage: boolean;
  deepPage: boolean;

  emptyAnchorTextLinks: number;
  genericAnchorTextLinks: number;
  imageLinksMissingAlt: number;

  nofollowInternalLinks: number;
  sponsoredInternalLinks: number;
  ugcInternalLinks: number;

  duplicateInternalLinks: number;
  linksToNonCanonicalPages: number;
  linksToNoindexPages: number;

  lowIncomingLinks: boolean;
  lowOutgoingLinks: boolean;
  excessiveOutgoingLinks: boolean;

  crawlDepth: number | null;
};

