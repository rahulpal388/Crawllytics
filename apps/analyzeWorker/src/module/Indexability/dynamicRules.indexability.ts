

import { INDEXABILITY_RULE_IDS, indexabilityRuleId } from "@/module/Indexability/ruleId.indexability.js";
import { DynamicRuleType } from "@repo/contracts/types/analysesTypes/DynamicRule.Type";
import { IndexabilityAnalysisTypes } from "@repo/contracts/types/analysesTypes/perPage/indexability.types";


export const indexabilityRules: DynamicRuleType<indexabilityRuleId, IndexabilityAnalysisTypes>[] = [
    // =========================================================
    // HTTP
    // =========================================================

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_001_FETCH_FAILED,
        name: "Page Fetch Failed",
        description:
            "The page could not be successfully fetched.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            !data.isSuccess || data.statusCode === null
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_002_404_STATUS,
        name: "Page Returns 404",
        description:
            "The page returns a 404 Not Found response.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.is404
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_003_5XX_STATUS,
        name: "Server Error",
        description:
            "The page returns a 5xx server error.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.is5xx
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_004_SOFT_404,
        name: "Soft 404",
        description:
            "The page returns a successful response but behaves like a missing page.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.isSoft404
    },

    // =========================================================
    // REDIRECT
    // =========================================================

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_005_REDIRECT_CHAIN,
        name: "Redirect Chain",
        description:
            "The URL passes through multiple redirects before reaching its final destination.",
        severity: "medium",
        category: "indexability",
        analyze: (data) =>
            data.hasRedirectChain
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_006_REDIRECT_LOOP,
        name: "Redirect Loop",
        description:
            "The URL is involved in a redirect loop and cannot reach a final destination.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.isRedirectLoop
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_007_TOO_MANY_REDIRECTS,
        name: "Too Many Redirects",
        description:
            "The URL requires an excessive number of redirects before reaching its final destination.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.redirectCount > 3
    },

    // =========================================================
    // ROBOTS DIRECTIVES
    // =========================================================

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_008_NOINDEX,
        name: "Noindex Directive",
        description:
            "The page contains a noindex directive that prevents it from being indexed.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.isNoIndex
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_009_X_ROBOTS_NOINDEX,
        name: "X-Robots-Tag Noindex",
        description:
            "The X-Robots-Tag header contains a noindex directive.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.xRobotsTag?.toLowerCase().includes("noindex") ?? false
    },

    // =========================================================
    // CANONICAL
    // =========================================================

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_010_CANONICAL_CONFLICT,
        name: "Canonical Conflict",
        description:
            "The page contains conflicting canonical signals.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.canonicalConflict
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_011_CANONICAL_TO_ERROR,
        name: "Canonical Points to Error",
        description:
            "The canonical URL returns an HTTP error response.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.hasCanonical &&
            data.canonicalStatusCode !== null &&
            data.canonicalStatusCode >= 400
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_012_CANONICAL_TO_NOINDEX,
        name: "Canonical Points to Noindex Page",
        description:
            "The canonical URL points to a page that is marked noindex.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.isNoIndexCanonical
    },

    // =========================================================
    // SITEMAP
    // =========================================================

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_013_SITEMAP_NOINDEX_CONFLICT,
        name: "Sitemap and Noindex Conflict",
        description:
            "The URL is included in the sitemap while also being marked noindex.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.isInSiteMap && data.isNoIndex
    },

    // =========================================================
    // JAVASCRIPT / RENDERING
    // =========================================================

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_014_CONTENT_REQUIRES_JAVASCRIPT,
        name: "Content Requires JavaScript",
        description:
            "Important page content depends on JavaScript rendering.",
        severity: "medium",
        category: "indexability",
        analyze: (data) =>
            data.contentRequiresJavaScript
    },

    {
        ruleId: INDEXABILITY_RULE_IDS.INDEX_015_BLOCKED_JAVASCRIPT_RESOURCES,
        name: "Blocked JavaScript Resources",
        description:
            "JavaScript resources required to render important page content are blocked.",
        severity: "high",
        category: "indexability",
        analyze: (data) =>
            data.hasBlockedJavaScriptResources
    },



];