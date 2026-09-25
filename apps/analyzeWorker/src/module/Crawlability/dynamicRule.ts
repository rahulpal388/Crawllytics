import { DynamicRuleType } from "@repo/contracts/types/analysesTypes/DynamicRule.Type"
import { CRAWLABILITY_RULE_IDS, crawlabilityRuleId } from "./rulesId.types.js"





export const crawlabilityDynamicRules: DynamicRuleType<crawlabilityRuleId>[] = [
    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_001_ROBOTS_BLOCKED,
        name: "URL blocked by robots.txt",
        description:
            "The URL is blocked by robots.txt.",
        severity: "critical",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_002_REDIRECT_LOOP,
        name: "Redirect loop",
        description:
            "The URL is involved in a redirect loop.",
        severity: "critical",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_003_REDIRECT_CHAIN,
        name: "Redirect chain",
        description:
            "The URL contains multiple redirects before reaching its destination.",
        severity: "warning",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_004_ORPHAN_PAGE,
        name: "Orphan page",
        description:
            "The page has no internal incoming links.",
        severity: "warning",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_005_DEEP_PAGE,
        name: "Deep page",
        description:
            "The page has an unusually high crawl depth.",
        severity: "medium",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_006_CANONICAL_CONFLICT,
        name: "Canonical conflict",
        description:
            "The page has conflicting canonical signals.",
        severity: "warning",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_007_SERVER_ERROR,
        name: "Server error",
        description:
            "The URL returned a 5xx response.",
        severity: "critical",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_008_RATE_LIMITED,
        name: "Rate limited",
        description:
            "The server returned HTTP 429.",
        severity: "warning",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_009_SLOW_RESPONSE,
        name: "Slow response",
        description:
            "The URL has a slow server response.",
        severity: "medium",
        category: "crawlability"
    },

    {
        ruleId: CRAWLABILITY_RULE_IDS.CRAWL_010_JS_REQUIRED,
        name: "JavaScript-dependent content",
        description:
            "Important content requires JavaScript execution.",
        severity: "medium",
        category: "crawlability"
    }
];