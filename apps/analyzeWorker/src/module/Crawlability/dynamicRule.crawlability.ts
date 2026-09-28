import { DynamicRuleType } from "@repo/contracts/types/analysesTypes/DynamicRule.Type"
import { CRAWLABILITY_RULE_IDS, crawlabilityRuleId } from "./rulesId.crawlability.js"
import { CrawlabilityAnalysisTypes } from "@repo/contracts/types/analysesTypes/perPage/crawlabilty.types";





export const crawlabilityDynamicRules: DynamicRuleType<crawlabilityRuleId, CrawlabilityAnalysisTypes>[] = [
    // =========================================================
    // FETCH
    // =========================================================

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_001_FETCH_FAILED,
        name: "Page Fetch Failed",
        description:
            "The URL could not be successfully fetched.",
        severity: "high",
        category: "crawlability",
        analyze: (data) =>
            !data.isSuccess || data.fetchError !== null
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_002_5XX_STATUS,
        name: "Server Error",
        description:
            "The URL returns a 5xx server error.",
        severity: "high",
        category: "crawlability",
        analyze: (data) =>
            data.is5xx
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_003_429_STATUS,
        name: "Rate Limited",
        description:
            "The server is rate limiting requests to the URL.",
        severity: "high",
        category: "crawlability",
        analyze: (data) =>
            data.is429
    },

    // =========================================================
    // ROBOTS
    // =========================================================

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_004_ROBOTS_BLOCKED,
        name: "Blocked by Robots.txt",
        description:
            "The URL is blocked from crawling by robots.txt.",
        severity: "high",
        category: "crawlability",
        analyze: (data) =>
            data.isBlockedByRobotsTxt
    },

    // =========================================================
    // DISCOVERY
    // =========================================================

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_005_NOT_IN_SITEMAP,
        name: "URL Not in Sitemap",
        description:
            "The URL is not included in the XML sitemap.",
        severity: "low",
        category: "crawlability",
        analyze: (data) =>
            !data.isInSiteMap
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_006_NOT_DISCOVERED_VIA_SITEMAP,
        name: "Not Discovered via Sitemap",
        description:
            "The URL was not discovered through the XML sitemap.",
        severity: "low",
        category: "crawlability",
        analyze: (data) =>
            !data.isDiscoveredViaSiteMap
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_007_NOT_DISCOVERED_VIA_INTERNAL_LINK,
        name: "Not Discovered via Internal Link",
        description:
            "The URL was not discovered through an internal link.",
        severity: "medium",
        category: "crawlability",
        analyze: (data) =>
            !data.isDiscoveredViaInternalLink
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_008_ORPHAN_PAGE,
        name: "Orphan Page",
        description:
            "The URL has no internal incoming links.",
        severity: "high",
        category: "crawlability",
        analyze: (data) =>
            data.isOrphan
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_009_LOW_INTERNAL_INCOMING_LINKS,
        name: "Low Internal Incoming Links",
        description:
            "The URL has very few internal incoming links.",
        severity: "low",
        category: "crawlability",
        analyze: (data) =>
            data.internalIncommingLink > 0 &&
            data.internalIncommingLink <= 2
    },

    // =========================================================
    // DEPTH
    // =========================================================

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_010_EXCESSIVE_CRAWL_DEPTH,
        name: "Excessive Crawl Depth",
        description:
            "The URL is located too far from the crawl starting point.",
        severity: "medium",
        category: "crawlability",
        analyze: (data) =>
            data.crawlDepth > 5
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_011_EXCESSIVE_URL_DEPTH,
        name: "Excessive URL Depth",
        description:
            "The URL contains a deeply nested path structure.",
        severity: "low",
        category: "crawlability",
        analyze: (data) =>
            data.urlDepth > 5
    },

    // =========================================================
    // URL
    // =========================================================

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_012_LONG_URL,
        name: "Long URL",
        description:
            "The URL is excessively long.",
        severity: "low",
        category: "crawlability",
        analyze: (data) =>
            data.urlLength > 2000
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_013_EXCESSIVE_QUERY_PARAMETERS,
        name: "Excessive Query Parameters",
        description:
            "The URL contains an excessive number of query parameters.",
        severity: "medium",
        category: "crawlability",
        analyze: (data) =>
            data.hasQueryParams &&
            data.queryParameterCount > 5
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_014_SESSION_ID_IN_URL,
        name: "Session ID in URL",
        description:
            "The URL contains a session identifier.",
        severity: "medium",
        category: "crawlability",
        analyze: (data) =>
            data.hasSessionId
    },

    {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_015_TRACKING_PARAMETER_IN_URL,
        name: "Tracking Parameter in URL",
        description:
            "The URL contains a tracking parameter.",
        severity: "low",
        category: "crawlability",
        analyze: (data) =>
            data.hasTrackingParameter
    },

];