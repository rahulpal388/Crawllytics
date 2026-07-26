import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const metaRobotsRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_META_ROBOTS",
            title: "Missing meta robots tag",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) => !data.metaRobots.hasMetaRobots,
        },

        {
            code: "MULTIPLE_META_ROBOTS",
            title: "Multiple meta robots tags detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.metaRobots.hasMultipleMetaRobots,
        },

        // ===========================
        // Indexing Directives
        // ===========================

        {
            code: "META_NOINDEX",
            title: "Page is marked as noindex",
            category: "metadata",
            severity: "critical",
            scoreImpact: 20,
            check: (data) => data.metaRobots.metaNoindex,
        },

        {
            code: "META_NOFOLLOW",
            title: "Page is marked as nofollow",
            category: "metadata",
            severity: "high",
            scoreImpact: 10,
            check: (data) => data.metaRobots.metaNofollow,
        },

        {
            code: "META_NOARCHIVE",
            title: "Page prevents cached copies",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) => data.metaRobots.metaNoarchive,
        },

        {
            code: "META_NOSNIPPET",
            title: "Page prevents search snippets",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) => data.metaRobots.metaNosnippet,
        },

        {
            code: "META_NOIMAGEINDEX",
            title: "Images are blocked from indexing",
            category: "metadata",
            severity: "low",
            scoreImpact: 2,
            check: (data) => data.metaRobots.metaNoimageindex,
        },

        // ===========================
        // Conflicts
        // ===========================

        {
            code: "INDEX_NOINDEX_CONFLICT",
            title: "Conflicting index and noindex directives",
            category: "metadata",
            severity: "critical",
            scoreImpact: 20,
            check: (data) =>
                data.metaRobots.metaIndex &&
                data.metaRobots.metaNoindex,
        },

        {
            code: "FOLLOW_NOFOLLOW_CONFLICT",
            title: "Conflicting follow and nofollow directives",
            category: "metadata",
            severity: "high",
            scoreImpact: 10,
            check: (data) =>
                data.metaRobots.metaFollow &&
                data.metaRobots.metaNofollow,
        },

        // ===========================
        // Advanced Directives
        // ===========================

        {
            code: "INDEXIFEMBEDDED_WITHOUT_NOINDEX",
            title: "indexifembedded used without noindex",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.metaRobots.metaIndexIfEmbedded &&
                !data.metaRobots.metaNoindex,
        },

        {
            code: "MAX_SNIPPET_INVALID",
            title: "Invalid max-snippet directive",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.metaRobots.hasMaxSnippet,
        },

        {
            code: "MAX_IMAGE_PREVIEW_INVALID",
            title: "Invalid max-image-preview directive",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.metaRobots.hasMaxImagePreview,
        },

        {
            code: "MAX_VIDEO_PREVIEW_INVALID",
            title: "Invalid max-video-preview directive",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.metaRobots.hasMaxVideoPreview,
        },

        {
            code: "UNAVAILABLE_AFTER_EXPIRED",
            title: "Page has expired using unavailable_after",
            category: "metadata",
            severity: "critical",
            scoreImpact: 20,
            check: (data) => data.metaRobots.hasUnavailableAfter,
        },
    ];