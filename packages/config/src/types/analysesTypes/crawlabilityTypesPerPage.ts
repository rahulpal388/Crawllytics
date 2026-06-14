
export type CrawlabilityPerPage = {
    statusCode: number;
    redirectChainLength: number;
    isRedirectLoop: boolean;

    robotsTxtBlocked: boolean;

    metaRobots: string | null;
    xRobotsTag: string[];

    canonicalUrl: string[];

    internalIncomingLinks: number;
    isOrphanPage: boolean;

    urlDepth: number;
    isInSitemap: boolean;

    crawlabilityScore: number; // 0-100
}