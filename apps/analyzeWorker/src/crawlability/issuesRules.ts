import { PageCrawlabilityAnalysis } from "@repo/config/types/analysesTypes/perPages/pageCrawlability";
import { RulesType } from "@/types/rulesType.js";
import { CRAWLABILITY_THRESHOLDS } from "@/crawlability/threshold.js";
import { CrawlabilityIssueCode } from "@/crawlability/issuesCode.js";

export const crawlabilityIssuesRules: RulesType<PageCrawlabilityAnalysis, CrawlabilityIssueCode>[] = [
    // ===========================
    // HTTP Response
    // ===========================

    {
        code: "HTTP_STATUS_3XX",
        title: "Page redirects",
        category: "crawlability",
        severity: "low",
        scoreImpact: 2,
        check: (data) =>
            data.httpResponse.statusCode >= 300 &&
            data.httpResponse.statusCode < 400,
    },

    {
        code: "HTTP_STATUS_4XX",
        title: "Page returned a client error",
        category: "crawlability",
        severity: "critical",
        scoreImpact: 20,
        check: (data) =>
            data.httpResponse.statusCode >= 400 &&
            data.httpResponse.statusCode < 500,
    },

    {
        code: "HTTP_STATUS_5XX",
        title: "Page returned a server error",
        category: "crawlability",
        severity: "critical",
        scoreImpact: 25,
        check: (data) =>
            data.httpResponse.statusCode >= 500 &&
            data.httpResponse.statusCode < 600,
    },

    {
        code: "REDIRECT_LOOP",
        title: "Redirect loop detected",
        category: "crawlability",
        severity: "critical",
        scoreImpact: 25,
        check: (data) =>
            data.httpResponse.isRedirectLoop,
    },

    {
        code: "REDIRECT_CHAIN",
        title: "Redirect chain detected",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            data.httpResponse.redirectCount >= 2 &&
            data.httpResponse.redirectCount <= 3,
    },
    {
        code: "LONG_REDIRECT_CHAIN",
        title: "Long redirect chain detected",
        category: "crawlability",
        severity: "high",
        scoreImpact: 10,
        check: (data) =>
            data.httpResponse.redirectCount > CRAWLABILITY_THRESHOLDS.MAX_REDIRECT_CHAIN,
    },

    // ===========================
    // robots.txt
    // ===========================

    {
        code: "ROBOTS_TXT_BLOCKED",
        title: "Blocked by robots.txt",
        category: "crawlability",
        severity: "critical",
        scoreImpact: 20,
        check: (data) =>
            !data.robotTxt.allowed,
    },

    {
        code: "ROBOTS_USER_AGENT_NOT_MATCHED",
        title: "No matching user-agent rule found",
        category: "crawlability",
        severity: "info",
        scoreImpact: 0,
        check: (data) =>
            !data.robotTxt.matchedUserAgent,
    },

    // ===========================
    // Internal Linking
    // ===========================

    {
        code: "NO_INTERNAL_INCOMING_LINKS",
        title: "Page has no internal incoming links",
        category: "crawlability",
        severity: "high",
        scoreImpact: 10,
        check: (data) =>
            data.internalLink.totalIncomingLinks === 0,
    },

    {
        code: "NO_INTERNAL_OUTGOING_LINKS",
        title: "Page has no internal outgoing links",
        category: "crawlability",
        severity: "low",
        scoreImpact: 2,
        check: (data) =>
            data.internalLink.totalOutgoingLinks === 0,
    },

    // ===========================
    // Network
    // ===========================

    {
        code: "SLOW_DNS_LOOKUP",
        title: "DNS lookup is slow",
        category: "crawlability",
        severity: "low",
        scoreImpact: 2,
        check: (data) =>
            data.network.dnsLookupTime > CRAWLABILITY_THRESHOLDS.DNS_LOOKUP_MS,
    },

    {
        code: "SLOW_TCP_CONNECTION",
        title: "TCP connection is slow",
        category: "crawlability",
        severity: "low",
        scoreImpact: 2,
        check: (data) =>
            data.network.tcpConnectTime > CRAWLABILITY_THRESHOLDS.TCP_CONNECT_MS,
    },

    {
        code: "SLOW_TLS_HANDSHAKE",
        title: "TLS handshake is slow",
        category: "crawlability",
        severity: "low",
        scoreImpact: 2,
        check: (data) =>
            data.network.tlsHandshakeTime > CRAWLABILITY_THRESHOLDS.TLS_HANDSHAKE_MS,
    },

    {
        code: "HIGH_TTFB",
        title: "Time to first byte is high",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            data.network.timeToFirstByte > CRAWLABILITY_THRESHOLDS.TTFB_MS,
    },

    {
        code: "HIGH_RESPONSE_TIME",
        title: "Server response time is high",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            data.network.totalResponseTime > CRAWLABILITY_THRESHOLDS.RESPONSE_TIME_MS,
    },

    // ===========================
    // Meta Robots
    // ===========================

    {
        code: "META_ROBOTS_NOINDEX",
        title: "Meta robots contains noindex",
        category: "crawlability",
        severity: "critical",
        scoreImpact: 20,
        check: (data) =>
            data.metaRobots.includes("noindex"),
    },

    {
        code: "META_ROBOTS_NOFOLLOW",
        title: "Meta robots contains nofollow",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            data.metaRobots.includes("nofollow"),
    },

    // ===========================
    // X-Robots-Tag
    // ===========================

    {
        code: "X_ROBOTS_NOINDEX",
        title: "X-Robots-Tag contains noindex",
        category: "crawlability",
        severity: "critical",
        scoreImpact: 20,
        check: (data) =>
            data.xRobotTag.includes("noindex"),
    },

    {
        code: "X_ROBOTS_NOFOLLOW",
        title: "X-Robots-Tag contains nofollow",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            data.xRobotTag.includes("nofollow"),
    },

    // ===========================
    // Canonical
    // ===========================

    {
        code: "MISSING_CANONICAL",
        title: "Canonical tag is missing",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            data.canonicalUrl.length === 0,
    },

    {
        code: "MULTIPLE_CANONICAL",
        title: "Multiple canonical tags detected",
        category: "crawlability",
        severity: "high",
        scoreImpact: 10,
        check: (data) =>
            data.canonicalUrl.length > 1,
    },

    // ===========================
    // Sitemap
    // ===========================

    {
        code: "NOT_IN_SITEMAP",
        title: "Page is not present in sitemap",
        category: "crawlability",
        severity: "warning",
        scoreImpact: 5,
        check: (data) =>
            !data.isInSiteMap,
    },
];