
import { CRAWLABILITY_DOCUMENTATION } from "@/crawlability/documentation.js";
import { CRAWLABILITY_ISSUE_CODES, CrawlabilityIssueCode } from "./issuesCode.js";
import { RecommendationType } from "@repo/config/types/analysesTypes/recommendationTypes";

export const crawlabilityRecommendations: Record<
    CrawlabilityIssueCode,
    RecommendationType

> = {
    [CRAWLABILITY_ISSUE_CODES.HTTP_STATUS_3XX]: {
        title: "Page redirects",
        description: "The requested URL redirects to another URL.",
        whyItMatters:
            "Redirects increase crawl time and may slow users if used excessively.",
        howToFix: [
            "Link directly to the final destination whenever possible.",
            "Avoid unnecessary redirects."
        ],
        documentationLinks: [
            ...CRAWLABILITY_DOCUMENTATION.HTTP_STATUS,
            ...CRAWLABILITY_DOCUMENTATION.REDIRECTS
        ]
    },

    [CRAWLABILITY_ISSUE_CODES.HTTP_STATUS_4XX]: {
        title: "Client error",
        description: "The page returned a 4xx HTTP status code.",
        whyItMatters:
            "Search engines cannot access the page, which may result in deindexing and poor user experience.",
        howToFix: [
            "Restore the missing page.",
            "If the page moved, add a 301 redirect.",
            "Update internal links pointing to this URL."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.HTTP_STATUS
    },

    [CRAWLABILITY_ISSUE_CODES.HTTP_STATUS_5XX]: {
        title: "Server error",
        description: "The server returned a 5xx HTTP status code.",
        whyItMatters:
            "Search engines may stop crawling pages that repeatedly return server errors.",
        howToFix: [
            "Investigate server logs.",
            "Fix application or server configuration.",
            "Ensure the page returns HTTP 200."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.HTTP_STATUS
    },

    [CRAWLABILITY_ISSUE_CODES.REDIRECT_LOOP]: {
        title: "Redirect loop detected",
        description: "The page redirects in a loop.",
        whyItMatters:
            "Neither users nor search engines can reach the destination page.",
        howToFix: [
            "Break the redirect cycle.",
            "Redirect directly to the final destination."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.REDIRECTS
    },

    [CRAWLABILITY_ISSUE_CODES.REDIRECT_CHAIN]: {
        title: "Redirect chain detected",
        description: "The page redirects through multiple URLs.",
        whyItMatters:
            "Long redirect chains waste crawl budget and increase latency.",
        howToFix: [
            "Reduce the number of redirects.",
            "Point directly to the final URL."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.REDIRECTS
    },

    [CRAWLABILITY_ISSUE_CODES.LONG_REDIRECT_CHAIN]: {
        title: "Long redirect chain",
        description: "More than the recommended number of redirects were detected.",
        whyItMatters:
            "Long redirect chains reduce crawl efficiency and page loading speed.",
        howToFix: [
            "Limit redirects to one whenever possible.",
            "Remove unnecessary intermediate redirects."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.REDIRECTS
    },

    [CRAWLABILITY_ISSUE_CODES.ROBOTS_TXT_BLOCKED]: {
        title: "Blocked by robots.txt",
        description: "The page is disallowed by robots.txt.",
        whyItMatters:
            "Search engines may not crawl this page.",
        howToFix: [
            "Remove the Disallow rule if the page should be crawlable.",
            "Verify the robots.txt configuration."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.ROBOTS_TXT
    },

    [CRAWLABILITY_ISSUE_CODES.ROBOTS_USER_AGENT_NOT_MATCHED]: {
        title: "No matching user-agent",
        description: "No robots.txt rule explicitly matched the crawler.",
        whyItMatters:
            "This is informational and usually not an issue.",
        howToFix: [],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.ROBOTS_TXT
    },

    [CRAWLABILITY_ISSUE_CODES.NO_INTERNAL_INCOMING_LINKS]: {
        title: "No incoming internal links",
        description: "No internal pages link to this page.",
        whyItMatters:
            "The page may become orphaned and difficult for search engines to discover.",
        howToFix: [
            "Add relevant internal links from other pages."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.INTERNAL_LINKING
    },

    [CRAWLABILITY_ISSUE_CODES.NO_INTERNAL_OUTGOING_LINKS]: {
        title: "No outgoing internal links",
        description: "The page does not link to other pages on the site.",
        whyItMatters:
            "Internal linking helps users and search engines discover related content.",
        howToFix: [
            "Add relevant internal links where appropriate."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.INTERNAL_LINKING
    },

    [CRAWLABILITY_ISSUE_CODES.SLOW_DNS_LOOKUP]: {
        title: "Slow DNS lookup",
        description: "DNS resolution took longer than recommended.",
        whyItMatters: "Slow DNS resolution increases response time.",
        howToFix: [
            "Use a faster DNS provider.",
            "Optimize DNS configuration."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.PERFORMANCE
    },

    [CRAWLABILITY_ISSUE_CODES.SLOW_TCP_CONNECTION]: {
        title: "Slow TCP connection",
        description: "TCP connection establishment is slow.",
        whyItMatters: "Slow connections delay page loading.",
        howToFix: [
            "Reduce network latency.",
            "Optimize hosting infrastructure."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.PERFORMANCE
    },

    [CRAWLABILITY_ISSUE_CODES.SLOW_TLS_HANDSHAKE]: {
        title: "Slow TLS handshake",
        description: "TLS negotiation is taking too long.",
        whyItMatters: "TLS delays affect page response time.",
        howToFix: [
            "Optimize TLS configuration.",
            "Enable modern TLS protocols."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.PERFORMANCE
    },

    [CRAWLABILITY_ISSUE_CODES.HIGH_TTFB]: {
        title: "High Time to First Byte",
        description: "The server takes too long to send the first byte.",
        whyItMatters: "High TTFB negatively affects crawl efficiency and user experience.",
        howToFix: [
            "Optimize backend processing.",
            "Enable caching.",
            "Reduce database response times."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.PERFORMANCE
    },

    [CRAWLABILITY_ISSUE_CODES.HIGH_RESPONSE_TIME]: {
        title: "High server response time",
        description: "The page response time exceeds the recommended threshold.",
        whyItMatters: "Slow responses reduce crawl efficiency.",
        howToFix: [
            "Improve server performance.",
            "Optimize application code."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.PERFORMANCE
    },

    [CRAWLABILITY_ISSUE_CODES.META_ROBOTS_NOINDEX]: {
        title: "Meta robots contains noindex",
        description: "The page instructs search engines not to index it.",
        whyItMatters: "The page may not appear in search results.",
        howToFix: [
            "Remove the noindex directive if the page should be indexed."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.ROBOTS_META
    },

    [CRAWLABILITY_ISSUE_CODES.META_ROBOTS_NOFOLLOW]: {
        title: "Meta robots contains nofollow",
        description: "Links on the page may not be followed by search engines.",
        whyItMatters: "This can reduce link discovery.",
        howToFix: [
            "Remove the nofollow directive if appropriate."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.ROBOTS_META
    },

    [CRAWLABILITY_ISSUE_CODES.X_ROBOTS_NOINDEX]: {
        title: "X-Robots-Tag contains noindex",
        description: "The HTTP header instructs search engines not to index the page.",
        whyItMatters: "The page may be excluded from search results.",
        howToFix: [
            "Remove the noindex X-Robots-Tag if indexing is intended."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.ROBOTS_META
    },

    [CRAWLABILITY_ISSUE_CODES.X_ROBOTS_NOFOLLOW]: {
        title: "X-Robots-Tag contains nofollow",
        description: "The HTTP header prevents search engines from following links.",
        whyItMatters: "Link discovery may be reduced.",
        howToFix: [
            "Remove the nofollow directive if appropriate."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.ROBOTS_META
    },

    [CRAWLABILITY_ISSUE_CODES.MISSING_CANONICAL]: {
        title: "Missing canonical tag",
        description: "No canonical tag was found.",
        whyItMatters: "Canonical tags help search engines understand the preferred URL.",
        howToFix: [
            "Add a self-referencing canonical tag."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.CANONICAL
    },

    [CRAWLABILITY_ISSUE_CODES.MULTIPLE_CANONICAL]: {
        title: "Multiple canonical tags",
        description: "More than one canonical tag was found.",
        whyItMatters: "Multiple canonical tags create ambiguity.",
        howToFix: [
            "Keep only one canonical tag per page."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.CANONICAL
    },

    [CRAWLABILITY_ISSUE_CODES.NOT_IN_SITEMAP]: {
        title: "Page not in sitemap",
        description: "The page was not found in the XML sitemap.",
        whyItMatters: "Sitemaps help search engines discover important pages.",
        howToFix: [
            "Add the page to the XML sitemap if it should be indexed."
        ],
        documentationLinks: CRAWLABILITY_DOCUMENTATION.XML_SITEMAPS
    },
};