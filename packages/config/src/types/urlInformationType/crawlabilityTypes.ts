

export type CrawlabilityType = {
    blockedByRobots: boolean;
    robotsDisallowRules: string[];
    matchedRobotsDisallowPatterns: string[];
    inXmlSitemap: boolean;
    sitemapPriority: number | null;

    sitemapChangefreq: string | null;
    sitemapLastmod: string | null;
    isNoindex: boolean;
    isNofollow: boolean;
    hasSitemapLink: boolean;
    robotsTxtUserAgents: string[];
}