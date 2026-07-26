import { PageIndexabilityType } from "@repo/config/types/analysesTypes/perPages/pageIndexability";
import { IndexabilityIssueCode } from "@/indexability/issuesCode.js";
import { RulesType } from "@repo/config/types/analysesTypes/rulesType";

export const indexabilityIssuesRules: RulesType<
    PageIndexabilityType,
    IndexabilityIssueCode
>[] = [
        // ===========================
        // HTTP Status
        // ===========================

        {
            code: "PAGE_NOT_FOUND",
            title: "Page returned 404 Not Found",
            category: "indexability",
            severity: "critical",
            scoreImpact: 20,
            check: (data) => data.statusCode === 404,
        },

        {
            code: "CLIENT_ERROR",
            title: "Page returned a client error",
            category: "indexability",
            severity: "critical",
            scoreImpact: 20,
            check: (data) =>
                data.statusCode >= 400 &&
                data.statusCode < 500 &&
                data.statusCode !== 404,
        },

        {
            code: "SERVER_ERROR",
            title: "Page returned a server error",
            category: "indexability",
            severity: "critical",
            scoreImpact: 25,
            check: (data) =>
                data.statusCode >= 500 &&
                data.statusCode < 600,
        },

        {
            code: "REDIRECT_PAGE",
            title: "URL is a redirect",
            category: "indexability",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.statusCode >= 300 &&
                data.statusCode < 400,
        },

        // ===========================
        // Meta Robots
        // ===========================

        {
            code: "META_NOINDEX",
            title: "Meta robots contains noindex",
            category: "indexability",
            severity: "critical",
            scoreImpact: 20,
            check: (data) =>
                data.metaRobots.includes("noindex"),
        },

        {
            code: "META_NONE",
            title: "Meta robots contains none",
            category: "indexability",
            severity: "critical",
            scoreImpact: 20,
            check: (data) =>
                data.metaRobots.includes("none"),
        },

        {
            code: "META_UNAVAILABLE_AFTER",
            title: "Meta robots contains unavailable_after",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.metaRobots.some(v => {
                    console.log(v, typeof v);
                    // v.startsWith("unavai}lable_after")
                    return true;
                }
                ),
        },

        {
            code: "META_NOSNIPPET",
            title: "Meta robots contains nosnippet",
            category: "indexability",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.metaRobots.includes("nosnippet"),
        },

        {
            code: "META_NOARCHIVE",
            title: "Meta robots contains noarchive",
            category: "indexability",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.metaRobots.includes("noarchive"),
        },

        // ===========================
        // X-Robots-Tag
        // ===========================

        {
            code: "X_ROBOTS_NOINDEX",
            title: "X-Robots-Tag contains noindex",
            category: "indexability",
            severity: "critical",
            scoreImpact: 20,
            check: (data) =>
                data.xRobotsTag.includes("noindex"),
        },

        {
            code: "X_ROBOTS_NONE",
            title: "X-Robots-Tag contains none",
            category: "indexability",
            severity: "critical",
            scoreImpact: 20,
            check: (data) =>
                data.xRobotsTag.includes("none"),
        },

        {
            code: "X_ROBOTS_UNAVAILABLE_AFTER",
            title: "X-Robots-Tag contains unavailable_after",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.xRobotsTag.some(v =>
                    v.startsWith("unavailable_after")
                ),
        },

        {
            code: "X_ROBOTS_NOSNIPPET",
            title: "X-Robots-Tag contains nosnippet",
            category: "indexability",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.xRobotsTag.includes("nosnippet"),
        },

        {
            code: "X_ROBOTS_NOARCHIVE",
            title: "X-Robots-Tag contains noarchive",
            category: "indexability",
            severity: "low",
            scoreImpact: 2,
            check: (data) =>
                data.xRobotsTag.includes("noarchive"),
        },

        // ===========================
        // Robots Conflicts
        // ===========================

        {
            code: "CONFLICTING_ROBOTS_DIRECTIVES",
            title: "Conflicting robots directives detected",
            category: "indexability",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                (data.metaRobots.includes("index") &&
                    data.metaRobots.includes("noindex")) ||
                (data.xRobotsTag.includes("index") &&
                    data.xRobotsTag.includes("noindex")),
        },

        {
            code: "META_AND_X_ROBOTS_CONFLICT",
            title: "Meta robots conflicts with X-Robots-Tag",
            category: "indexability",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                (data.metaRobots.includes("index") &&
                    data.xRobotsTag.includes("noindex")) ||
                (data.metaRobots.includes("noindex") &&
                    data.xRobotsTag.includes("index")),
        },

        // ===========================
        // Canonical
        // ===========================

        {
            code: "MISSING_CANONICAL",
            title: "Canonical tag is missing",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.canonicalUrl.length === 0,
        },

        {
            code: "MULTIPLE_CANONICAL_TAGS",
            title: "Multiple canonical tags detected",
            category: "indexability",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                data.canonicalUrl.length > 1,
        },

        {
            code: "RELATIVE_CANONICAL_URL",
            title: "Canonical URL is relative",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.canonicalUrl.some(c => c.isRelativeUrl),
        },

        {
            code: "INVALID_CANONICAL_URL",
            title: "Canonical URL is invalid",
            category: "indexability",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                data.canonicalUrl.some(c => !c.isValidUrl),
        },

        {
            code: "NON_HTTPS_CANONICAL",
            title: "Canonical URL is not HTTPS",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.canonicalUrl.some(c => !c.isHttps),
        },

        {
            code: "CANONICAL_TO_DIFFERENT_PAGE",
            title: "Canonical points to a different page",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.canonicalUrl.some(c => c.isCrossPage),
        },

        {
            code: "CANONICAL_TO_EXTERNAL_DOMAIN",
            title: "Canonical points to another domain",
            category: "indexability",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                data.canonicalUrl.some(c => c.isCrossDomain),
        },

        {
            code: "CANONICAL_ON_NON_INDEXABLE_PAGE",
            title: "Canonical found on a non-indexable page",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                (
                    data.metaRobots.includes("noindex") ||
                    data.xRobotsTag.includes("noindex") ||
                    data.statusCode >= 400
                ) &&
                data.canonicalUrl.length > 0,
        },

        // ===========================
        // Content-Type
        // ===========================

        {
            code: "MISSING_CONTENT_TYPE",
            title: "Content-Type header is missing",
            category: "indexability",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.contentType === null,
        },

        {
            code: "INVALID_CONTENT_TYPE",
            title: "Content-Type is not HTML",
            category: "indexability",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                data.contentType !== null &&
                data.contentType.startsWith("text/html")

        },
    ];