import { MetaRuleId, META_RULE_IDS } from "@/module/meta/ruleId.meta.js";
import { DynamicRuleType, DynamicRuleRegistry } from "@repo/contracts/types/analysesTypes/DynamicRule.Type";
import { MetaAnalysisType } from "@repo/contracts/types/analysesTypes/perPage/meta.types"
import { getDirectives } from "@/utils/getDirectives.js";



const TITLE_MIN_CHARS = 15;
const TITLE_MAX_CHARS = 60;
const DESCRIPTION_MIN_CHARS = 70;
const DESCRIPTION_MAX_CHARS = 160;

export const META_DYNAMIC_RULES: DynamicRuleRegistry<MetaRuleId, MetaAnalysisType> = {
    [META_RULE_IDS.META_001_TITLE_MISSING]: {
        ruleId: META_RULE_IDS.META_001_TITLE_MISSING,
        name: "Missing title",
        description: "The page does not have a title element.",
        severity: "high",
        category: "metadata",
        analyze: (data) => data.meta.title.length === 0,
    },

    [META_RULE_IDS.META_002_TITLE_EMPTY]: {
        ruleId: META_RULE_IDS.META_002_TITLE_EMPTY,
        name: "Empty title",
        description: "The page has a title element, but its text is empty.",
        severity: "high",
        category: "metadata",
        analyze: (data) =>
            data.meta.title.length > 0 &&
            data.meta.title.every((title) => !title.text.trim()),
    },

    [META_RULE_IDS.META_003_TITLE_MULTIPLE]: {
        ruleId: META_RULE_IDS.META_003_TITLE_MULTIPLE,
        name: "Multiple title tags",
        description: "The page contains more than one title element.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => data.meta.title.length > 1,
    },

    [META_RULE_IDS.META_004_TITLE_TOO_SHORT]: {
        ruleId: META_RULE_IDS.META_004_TITLE_TOO_SHORT,
        name: "Title too short",
        description: "The title contains fewer than 15 characters.",
        severity: "low",
        category: "metadata",
        analyze: (data) =>
            data.meta.title.some(
                (title) =>
                    title.text.trim().length > 0 &&
                    title.lengthChar < 15,
            ),
    },

    [META_RULE_IDS.META_005_TITLE_TOO_LONG]: {
        ruleId: META_RULE_IDS.META_005_TITLE_TOO_LONG,
        name: "Title too long",
        description: "The title exceeds 60 characters.",
        severity: "medium",
        category: "metadata",
        analyze: (data) =>
            data.meta.title.some((title) => title.lengthChar > 60),
    },

    [META_RULE_IDS.META_006_DESCRIPTION_MISSING]: {
        ruleId: META_RULE_IDS.META_006_DESCRIPTION_MISSING,
        name: "Missing meta description",
        description: "The page does not have a meta description.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => data.meta.metaDescription.length === 0,
    },

    [META_RULE_IDS.META_007_DESCRIPTION_EMPTY]: {
        ruleId: META_RULE_IDS.META_007_DESCRIPTION_EMPTY,
        name: "Empty meta description",
        description: "The meta description exists but contains no meaningful text.",
        severity: "medium",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaDescription.length > 0 &&
            data.meta.metaDescription.every(
                (description) => !description.text.trim(),
            ),
    },

    [META_RULE_IDS.META_008_DESCRIPTION_MULTIPLE]: {
        ruleId: META_RULE_IDS.META_008_DESCRIPTION_MULTIPLE,
        name: "Multiple meta descriptions",
        description: "The page contains more than one meta description.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => data.meta.metaDescription.length > 1,
    },

    [META_RULE_IDS.META_009_DESCRIPTION_TOO_SHORT]: {
        ruleId: META_RULE_IDS.META_009_DESCRIPTION_TOO_SHORT,
        name: "Meta description too short",
        description: "The meta description contains fewer than 70 characters.",
        severity: "low",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaDescription.some(
                (description) =>
                    description.text.trim().length > 0 &&
                    description.lengthChar < 70,
            ),
    },

    [META_RULE_IDS.META_010_DESCRIPTION_TOO_LONG]: {
        ruleId: META_RULE_IDS.META_010_DESCRIPTION_TOO_LONG,
        name: "Meta description too long",
        description: "The meta description exceeds 160 characters.",
        severity: "low",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaDescription.some(
                (description) => description.lengthChar > 160,
            ),
    },

    [META_RULE_IDS.META_011_ROBOTS_NOINDEX]: {
        ruleId: META_RULE_IDS.META_011_ROBOTS_NOINDEX,
        name: "Noindex directive",
        description: "The meta robots directive contains noindex.",
        severity: "high",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaRobot.some((value) =>
                value.toLowerCase().split(/[\s,]+/).includes("noindex"),
            ),
    },

    [META_RULE_IDS.META_012_ROBOTS_NOFOLLOW]: {
        ruleId: META_RULE_IDS.META_012_ROBOTS_NOFOLLOW,
        name: "Nofollow directive",
        description: "The meta robots directive contains nofollow.",
        severity: "medium",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaRobot.some((value) =>
                value.toLowerCase().split(/[\s,]+/).includes("nofollow"),
            ),
    },

    [META_RULE_IDS.META_013_ROBOTS_CONFLICTING_DIRECTIVES]: {
        ruleId: META_RULE_IDS.META_013_ROBOTS_CONFLICTING_DIRECTIVES,
        name: "Conflicting robots directives",
        description: "The meta robots directives contain contradictory index or follow instructions.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => {
            const directives = new Set(
                data.meta.metaRobot
                    .flatMap((value) =>
                        value.toLowerCase().split(/[\s,]+/),
                    )
                    .map((value) => value.trim())
                    .filter(Boolean),
            );

            return (
                (directives.has("index") && directives.has("noindex")) ||
                (directives.has("follow") && directives.has("nofollow"))
            );
        },
    },

    [META_RULE_IDS.META_014_CANONICAL_MISSING]: {
        ruleId: META_RULE_IDS.META_014_CANONICAL_MISSING,
        name: "Missing canonical URL",
        description: "The page does not have a canonical link.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => data.meta.Canonical.length === 0,
    },

    [META_RULE_IDS.META_015_CANONICAL_MULTIPLE]: {
        ruleId: META_RULE_IDS.META_015_CANONICAL_MULTIPLE,
        name: "Multiple canonical URLs",
        description: "The page contains more than one canonical link.",
        severity: "high",
        category: "metadata",
        analyze: (data) => data.meta.Canonical.length > 1,
    },

    [META_RULE_IDS.META_016_CANONICAL_INVALID]: {
        ruleId: META_RULE_IDS.META_016_CANONICAL_INVALID,
        name: "Invalid canonical URL",
        description: "At least one canonical URL is invalid.",
        severity: "high",
        category: "metadata",
        analyze: (data) =>
            data.meta.Canonical.some(
                (canonical) => !canonical.isValidUrl,
            ),
    },

    [META_RULE_IDS.META_017_CANONICAL_RELATIVE_URL]: {
        ruleId: META_RULE_IDS.META_017_CANONICAL_RELATIVE_URL,
        name: "Relative canonical URL",
        description: "The canonical link uses a relative URL instead of an absolute URL.",
        severity: "low",
        category: "metadata",
        analyze: (data) =>
            data.meta.Canonical.some(
                (canonical) => canonical.isRelativeUrl,
            ),
    },

    [META_RULE_IDS.META_018_VIEWPORT_MISSING]: {
        ruleId: META_RULE_IDS.META_018_VIEWPORT_MISSING,
        name: "Missing viewport meta tag",
        description: "The page does not have a viewport meta tag.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => data.meta.metaViewport.length === 0,
    },

    [META_RULE_IDS.META_019_VIEWPORT_INVALID]: {
        ruleId: META_RULE_IDS.META_019_VIEWPORT_INVALID,
        name: "Invalid viewport configuration",
        description: "The viewport width or scale contains an invalid value.",
        severity: "medium",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaViewport.some((viewport) => {
                const width = viewport.width?.trim();

                const invalidWidth =
                    width != null &&
                    width !== "" &&
                    width !== "device-width" &&
                    (!Number.isFinite(Number(width)) ||
                        Number(width) <= 0);

                const invalidScale = [
                    viewport.initialScale,
                    viewport.minimumScale,
                    viewport.maximumScale,
                ].some(
                    (scale) =>
                        scale != null &&
                        (!Number.isFinite(scale) || scale <= 0),
                );

                return invalidWidth || invalidScale;
            }),
    },

    [META_RULE_IDS.META_020_VIEWPORT_ZOOM_RESTRICTED]: {
        ruleId: META_RULE_IDS.META_020_VIEWPORT_ZOOM_RESTRICTED,
        name: "Viewport zoom restricted",
        description: "The viewport disables user zoom or restricts maximum zoom to 1 or less.",
        severity: "medium",
        category: "metadata",
        analyze: (data) =>
            data.meta.metaViewport.some(
                (viewport) =>
                    viewport.userScalable === false ||
                    (viewport.maximumScale != null &&
                        viewport.maximumScale <= 1),
            ),
    },

    [META_RULE_IDS.META_021_ROBOTS_HEADER_CONFLICT]: {
        ruleId: META_RULE_IDS.META_021_ROBOTS_HEADER_CONFLICT,
        name: "Robots header conflict",
        description:
            "The meta robots and X-Robots-Tag directives contradict each other.",
        severity: "medium",
        category: "metadata",
        analyze: (data) => {
            const meta = getDirectives(data.meta.metaRobot);
            const headers = getDirectives(data.xRobotsTag);

            return (
                (meta.has("index") && headers.has("noindex")) ||
                (meta.has("noindex") && headers.has("index")) ||
                (meta.has("follow") && headers.has("nofollow")) ||
                (meta.has("nofollow") && headers.has("follow"))
            );
        },
    },
};