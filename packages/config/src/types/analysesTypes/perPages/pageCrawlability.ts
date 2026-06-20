

export type PageCrawlabilityAnalysis = {
    statusCode: number;

    redirectChainLength: number;
    isRedirect: boolean;
    isRedirectLoop: boolean;

    robotsTxtBlocked: boolean;
    robotsRuleMatched: string | null;

    metaRobots: string[];
    // xRobotsTag: string[];

    canonicalUrl: string[];
    // canonicalStatusCode: number | null;

    isInSitemap: boolean;

    internalIncomingLinks: number;

    urlDepth: number;

}