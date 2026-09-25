



export type CrawlabilityTypes = {
    statusCode: number | null;
    isSuccess: boolean;

    isRedirect: boolean;
    redirectCount: number;
    hasRedirectChain: boolean;
    isRedirectLoop: boolean;
    finalUrl: string;

    isBlockedByRobots: boolean;

    hasNoIndex: boolean;
    hasNoFollow: boolean;


    isInSiteMap: boolean;
    isDiscoveredViaSiteMap: boolean;
    isDiscoveredViaInternalLink: boolean;


    internalIncommingLink: number;
    internalOutgoingLink: number;
    isOrphan: boolean;


    crawlDepth: number;
    urlDepth: number;

    // Canonical
    hasCanonical: boolean;
    canonicalUrl: string | null;
    isSelfCanonical: boolean;
    canonicalStatusCode: number | null;
    canonicalConflict: boolean;

    // URL
    urlLength: number;
    hasQueryParams: boolean;
    queryParameterCount: number;
    hasFragment: boolean;
    hasSessionId: boolean;
    hasTrackingParameter: boolean;
    hasFilterParameter: boolean;
    hasSortParameter: boolean;

    // Protocol
    isHttps: boolean;

    // Server health
    ttfb: number;
    totalResponseTime: number;
    isSlow: boolean;
    is5xx: boolean;
    is429: boolean;

    // JS
    contentRequiresJavaScript: boolean;
    linksRequireJavaScript: boolean;
    hasBlockedJavaScriptResources: boolean;

    // Cache
    hasCacheControl: boolean;
    hasEtag: boolean;
    hasLastModified: boolean;
}