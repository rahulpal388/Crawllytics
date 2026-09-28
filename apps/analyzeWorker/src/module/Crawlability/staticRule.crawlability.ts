import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";
import {
    CRAWLABILITY_RULE_IDS,
    crawlabilityRuleId
} from "./rulesId.crawlability.js";

export const crawlabilityStaticRules: Record<
    crawlabilityRuleId,
    SEORules<crawlabilityRuleId>
> = {

    [CRAWLABILITY_RULE_IDS.CRAWL_001_FETCH_FAILED]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_001_FETCH_FAILED,
        name: "Page Fetch Failed",
        description:
            "The URL could not be successfully fetched.",
        whyItMatters:
            "A crawler cannot analyze or discover resources that it cannot successfully fetch.",
        recommendation: {
            description:
                "Identify and resolve the underlying network, DNS, TLS, timeout, or server problem.",
            steps: [
                "Check DNS configuration.",
                "Check network connectivity.",
                "Check TLS certificate configuration.",
                "Check server availability.",
                "Check request timeout configuration.",
                "Fix the underlying connectivity or server problem."
            ]
        },
        howToFix: null,
        fix:
            "Resolve the DNS, network, TLS, timeout, or server availability problem preventing the URL from being fetched."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_002_5XX_STATUS]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_002_5XX_STATUS,
        name: "Server Error",
        description:
            "The URL returns a 5xx server error.",
        whyItMatters:
            "Server errors prevent crawlers from successfully accessing the requested resource.",
        recommendation: {
            description:
                "Identify and resolve the server-side cause of the error.",
            steps: [
                "Inspect application logs.",
                "Check database and API failures.",
                "Check server resource usage.",
                "Check application exceptions.",
                "Fix the underlying server or infrastructure problem."
            ]
        },
        howToFix: null,
        fix:
            "Resolve the application, database, infrastructure, or server configuration problem causing the 5xx response."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_003_429_STATUS]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_003_429_STATUS,
        name: "Rate Limited",
        description:
            "The server is returning HTTP 429 Too Many Requests.",
        whyItMatters:
            "Rate limiting can prevent crawlers from accessing URLs consistently and can reduce the number of pages that can be crawled.",
        recommendation: {
            description:
                "Review the rate-limiting configuration and ensure legitimate crawlers can access the site at an appropriate request rate.",
            steps: [
                "Identify the source of the rate limiting.",
                "Review server and CDN rate-limit rules.",
                "Increase appropriate request limits where necessary.",
                "Configure crawler-friendly limits without removing necessary protection."
            ]
        },
        howToFix: null,
        fix:
            "Adjust server, CDN, firewall, or application rate-limiting rules so legitimate crawling is not unnecessarily restricted."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_004_ROBOTS_BLOCKED]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_004_ROBOTS_BLOCKED,
        name: "Blocked by Robots.txt",
        description:
            "The URL is blocked from crawling by robots.txt.",
        whyItMatters:
            "A robots.txt rule can prevent crawlers from accessing the URL and discovering its content or links.",
        recommendation: {
            description:
                "Review the robots.txt rule blocking the URL and remove the restriction if the URL should be crawlable.",
            steps: [
                "Identify the robots.txt directive matching the URL.",
                "Determine whether the restriction is intentional.",
                "Remove or narrow the blocking directive when appropriate.",
                "Keep necessary restrictions for resources that should remain blocked."
            ]
        },
        howToFix: null,
        fix:
            "Remove or narrow the robots.txt rule that blocks the URL when the URL should be crawlable."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_005_NOT_IN_SITEMAP]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_005_NOT_IN_SITEMAP,
        name: "URL Not in Sitemap",
        description:
            "The URL is not included in the XML sitemap.",
        whyItMatters:
            "A sitemap provides an additional discovery path for important URLs, especially URLs that may have limited internal linking.",
        recommendation: {
            description:
                "Include important canonical URLs in the XML sitemap.",
            steps: [
                "Determine whether the URL should be included in the sitemap.",
                "Add the URL to the XML sitemap if it is an important crawlable URL.",
                "Remove unnecessary or non-canonical URLs from the sitemap."
            ]
        },
        howToFix: null,
        fix:
            "Add the URL to the XML sitemap when it is an important URL that should be discovered by crawlers."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_006_NOT_DISCOVERED_VIA_SITEMAP]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_006_NOT_DISCOVERED_VIA_SITEMAP,
        name: "Not Discovered via Sitemap",
        description:
            "The URL was not discovered through the XML sitemap.",
        whyItMatters:
            "URLs that are not discoverable through a sitemap may rely entirely on other discovery paths.",
        recommendation: {
            description:
                "Provide the URL through the XML sitemap when sitemap discovery is appropriate.",
            steps: [
                "Determine whether the URL should be represented in the sitemap.",
                "Add the URL to the appropriate XML sitemap.",
                "Ensure the sitemap contains the preferred URL."
            ]
        },
        howToFix: null,
        fix:
            "Add the URL to the appropriate XML sitemap when sitemap-based discovery is required."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_007_NOT_DISCOVERED_VIA_INTERNAL_LINK]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_007_NOT_DISCOVERED_VIA_INTERNAL_LINK,
        name: "Not Discovered via Internal Link",
        description:
            "The URL was not discovered through an internal link.",
        whyItMatters:
            "Internal links provide a primary path for crawlers to discover related pages throughout a website.",
        recommendation: {
            description:
                "Add a relevant internal link from an accessible page.",
            steps: [
                "Identify a relevant page from which the URL should be linked.",
                "Add a standard crawlable internal link.",
                "Use descriptive anchor text where appropriate.",
                "Avoid relying only on client-side interactions for navigation."
            ]
        },
        howToFix: null,
        fix:
            "Add a relevant crawlable internal link pointing to the URL."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_008_ORPHAN_PAGE]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_008_ORPHAN_PAGE,
        name: "Orphan Page",
        description:
            "The URL has no internal incoming links.",
        whyItMatters:
            "Orphan pages have no internal link path from other pages and can be difficult for crawlers to discover through normal site navigation.",
        recommendation: {
            description:
                "Add relevant internal links pointing to the orphan page.",
            steps: [
                "Identify relevant pages related to the orphan URL.",
                "Add contextual internal links from those pages.",
                "Include the page in appropriate navigation or category structures when relevant."
            ]
        },
        howToFix: null,
        fix:
            "Add relevant internal links from accessible pages to the orphan URL."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_009_LOW_INTERNAL_INCOMING_LINKS]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_009_LOW_INTERNAL_INCOMING_LINKS,
        name: "Low Internal Incoming Links",
        description:
            "The URL has very few internal incoming links.",
        whyItMatters:
            "Pages with very few internal links may have weaker discovery paths within the site.",
        recommendation: {
            description:
                "Add relevant internal links where additional discovery paths are appropriate.",
            steps: [
                "Identify related pages that can naturally link to the URL.",
                "Add contextual internal links.",
                "Improve relevant category or navigation links."
            ]
        },
        howToFix: null,
        fix:
            "Add relevant internal links pointing to the page from related accessible pages."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_010_EXCESSIVE_CRAWL_DEPTH]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_010_EXCESSIVE_CRAWL_DEPTH,
        name: "Excessive Crawl Depth",
        description:
            "The URL is located too far from the crawl starting point.",
        whyItMatters:
            "Pages requiring many internal-link hops to reach can be harder to discover efficiently.",
        recommendation: {
            description:
                "Create a shorter internal-link path to the URL.",
            steps: [
                "Identify the current internal-link path.",
                "Add links from higher-level pages.",
                "Improve category and navigation structures.",
                "Reduce unnecessary intermediate pages in the discovery path."
            ]
        },
        howToFix: null,
        fix:
            "Create shorter internal-link paths from important pages to the deeply nested URL."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_011_EXCESSIVE_URL_DEPTH]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_011_EXCESSIVE_URL_DEPTH,
        name: "Excessive URL Depth",
        description:
            "The URL contains a deeply nested path structure.",
        whyItMatters:
            "Deep URL structures can make URLs more complex and may reflect unnecessary hierarchy.",
        recommendation: {
            description:
                "Simplify the URL structure where the existing hierarchy is unnecessary.",
            steps: [
                "Identify unnecessary path segments.",
                "Simplify the URL structure.",
                "Update internal links to the new URL.",
                "Redirect the old URL when the URL structure changes."
            ]
        },
        howToFix: null,
        fix:
            "Simplify unnecessary URL path segments and redirect the previous URL when the URL changes."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_012_LONG_URL]: {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_012_LONG_URL,
        name: "Long URL",
        description:
            "The URL is excessively long.",
        whyItMatters:
            "Very long URLs are more complex to process, maintain, share, and link to.",
        recommendation: {
            description:
                "Remove unnecessary characters, path segments, and parameters from the URL.",
            steps: [
                "Remove unnecessary path segments.",
                "Remove unnecessary query parameters.",
                "Use concise URL structures.",
                "Redirect the old URL when changing the URL."
            ]
        },
        howToFix: null,
        fix:
            "Simplify the URL by removing unnecessary path segments and parameters."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_013_EXCESSIVE_QUERY_PARAMETERS]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_013_EXCESSIVE_QUERY_PARAMETERS,
        name: "Excessive Query Parameters",
        description:
            "The URL contains an excessive number of query parameters.",
        whyItMatters:
            "Large numbers of URL parameters can create many URL variations and increase the number of URLs a crawler may need to process.",
        recommendation: {
            description:
                "Reduce unnecessary query parameters and prevent unnecessary URL variations.",
            steps: [
                "Identify unnecessary parameters.",
                "Remove parameters that do not change the requested resource.",
                "Prevent unnecessary parameter combinations.",
                "Use cleaner URL structures where appropriate."
            ]
        },
        howToFix: null,
        fix:
            "Remove unnecessary query parameters and prevent the creation of redundant URL variations."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_014_SESSION_ID_IN_URL]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_014_SESSION_ID_IN_URL,
        name: "Session ID in URL",
        description:
            "The URL contains a session identifier.",
        whyItMatters:
            "Session identifiers can create multiple URL variations for the same resource and increase crawl complexity.",
        recommendation: {
            description:
                "Move session management away from crawlable URLs.",
            steps: [
                "Use cookie-based session management.",
                "Remove session identifiers from links.",
                "Prevent session IDs from being generated in crawlable URLs."
            ]
        },
        howToFix: null,
        fix:
            "Use cookie-based sessions instead of placing session identifiers in crawlable URLs."
    },

    [CRAWLABILITY_RULE_IDS.CRAWL_015_TRACKING_PARAMETER_IN_URL]: {
        ruleId:
            CRAWLABILITY_RULE_IDS.CRAWL_015_TRACKING_PARAMETER_IN_URL,
        name: "Tracking Parameter in URL",
        description:
            "The URL contains a tracking parameter.",
        whyItMatters:
            "Tracking parameters can create multiple URL variants of the same page and increase unnecessary crawl requests.",
        recommendation: {
            description:
                "Keep tracking parameters out of crawlable internal URLs where possible.",
            steps: [
                "Identify tracking parameters used in the URL.",
                "Avoid adding tracking parameters to internal links.",
                "Use a tracking mechanism that does not create unnecessary crawlable URL variants."
            ]
        },
        howToFix: null,
        fix:
            "Remove unnecessary tracking parameters from crawlable internal URLs."
    },

};