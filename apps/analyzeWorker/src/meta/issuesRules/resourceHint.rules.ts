import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const resourceHintsRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // DNS Prefetch
        // ===========================

        {
            code: "MISSING_DNS_PREFETCH",
            title: "Missing DNS Prefetch",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.resourceHints.hasDnsPrefetch,
        },

        // ===========================
        // Preconnect
        // ===========================

        {
            code: "MISSING_PRECONNECT",
            title: "Missing Preconnect resource hint",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.resourceHints.hasPreconnect,
        },

        // ===========================
        // Preload
        // ===========================

        {
            code: "MISSING_PRELOAD",
            title: "Missing Preload resource hint",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.resourceHints.hasPreload,
        },

        // ===========================
        // Prefetch
        // ===========================

        {
            code: "MISSING_PREFETCH",
            title: "Missing Prefetch resource hint",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.resourceHints.hasPrefetch,
        },

        // ===========================
        // Module Preload
        // ===========================

        {
            code: "MISSING_MODULE_PRELOAD",
            title: "Missing modulepreload resource hint",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.resourceHints.hasModulePreload,
        },
    ];