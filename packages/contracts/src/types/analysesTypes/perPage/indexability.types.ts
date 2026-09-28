export type IndexabilityAnalysisTypes = {

    // HTTP
    statusCode: number | null;
    isSuccess: boolean;
    is3xx: boolean;
    is404: boolean;
    is5xx: boolean;
    isSoft404: boolean;

    // Redirect
    isRedirect: boolean;
    redirectCount: number;
    hasRedirectChain: boolean;
    isRedirectLoop: boolean;
    finalUrl: string;

    // Robots directives
    metaRobots: string | null;
    xRobotsTag: string | null;

    isNoIndex: boolean;
    noFollow: boolean;
    noSnippet: boolean;

    // Canonical
    hasCanonical: boolean;
    canonicalUrl: string | null;
    isSelfCanonical: boolean;
    isAbsoluteCanonical: boolean;
    canonicalStatusCode: number | null;
    isNoIndexCanonical: boolean;
    canonicalConflict: boolean;

    // Sitemap/indexing relationship
    isInSiteMap: boolean;

    // Rendering
    contentRequiresJavaScript: boolean;
    hasBlockedJavaScriptResources: boolean;
};