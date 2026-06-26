

export type PageCrawlabilityAnalysis = {
    score: number;

    crawlable: boolean;

    isReachable: boolean;

    isBlockedByRobots: boolean;

    isBlockedByMetaRobots: boolean;

    isBlockedByXRobots: boolean;

    isRedirect: boolean;

    redirectChainLength: number;

    isRedirectLoop: boolean;

    isSoft404: boolean;

    canonicalConflict: boolean;

    crawlDepth: number;

    discoveredViaInternalLink: boolean;

    discoveredViaSitemap: boolean;
}