


import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { RulesType } from "@/types/rulesType.js";
import { MetaIssueCode } from "@/meta/issuesCode.js";

export const viewportRules: RulesType<
    PageMetaAnalysis,
    MetaIssueCode
>[] = [
        // ===========================
        // Existence
        // ===========================

        {
            code: "MISSING_VIEWPORT",
            title: "Missing viewport meta tag",
            category: "metadata",
            severity: "high",
            scoreImpact: 20,
            check: (data) => !data.viewport.hasViewport,
        },

        {
            code: "MULTIPLE_VIEWPORTS",
            title: "Multiple viewport meta tags detected",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) => data.viewport.hasMultipleViewports,
        },

        // ===========================
        // Required Directives
        // ===========================

        {
            code: "MISSING_VIEWPORT_WIDTH",
            title: "Viewport is missing width=device-width",
            category: "metadata",
            severity: "warning",
            scoreImpact: 10,
            check: (data) =>
                data.viewport.hasViewport &&
                !data.viewport.hasViewportWidth,
        },

        {
            code: "MISSING_INITIAL_SCALE",
            title: "Viewport is missing initial-scale",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.viewport.hasViewport &&
                !data.viewport.hasInitialScale,
        },

        // ===========================
        // Accessibility
        // ===========================

        {
            code: "USER_ZOOM_DISABLED",
            title: "User zoom is disabled",
            category: "metadata",
            severity: "high",
            scoreImpact: 15,
            check: (data) =>
                data.viewport.hasUserScalable ||
                data.viewport.hasMaximumScale,
        },

        // ===========================
        // Modern Directives
        // ===========================

        {
            code: "MISSING_VIEWPORT_FIT",
            title: "Missing viewport-fit directive",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) =>
                data.viewport.hasViewport &&
                !data.viewport.hasViewportFit,
        },

        {
            code: "MISSING_INTERACTIVE_WIDGET",
            title: "Missing interactive-widget directive",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) =>
                data.viewport.hasViewport &&
                !data.viewport.hasInteractiveWidget,
        },

        // ===========================
        // Scale Validation
        // ===========================

        {
            code: "INVALID_MINIMUM_SCALE",
            title: "Viewport specifies minimum-scale",
            category: "metadata",
            severity: "info",
            scoreImpact: 0,
            check: (data) =>
                data.viewport.hasMinimumScale,
        },

        {
            code: "INVALID_MAXIMUM_SCALE",
            title: "Viewport specifies maximum-scale",
            category: "metadata",
            severity: "warning",
            scoreImpact: 5,
            check: (data) =>
                data.viewport.hasMaximumScale,
        },
    ];