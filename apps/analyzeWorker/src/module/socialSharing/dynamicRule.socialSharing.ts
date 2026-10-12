import type { DynamicRuleRegistry } from "@repo/contracts/types/analysesTypes/DynamicRule.Type";
import {
    type SocialSharingRuleId,
    SOCIAL_SHARING_RULE_IDS,
} from "@/module/socialSharing/ruleId.socialSharing.js";
import type { SocialSharingType } from "@repo/contracts/types/analysesTypes/perPage/socialSharing/socialSharing.types";

function hasText(value: string | null | undefined): boolean {
    return typeof value === "string" && value.trim().length > 0;
}

function isValidAbsoluteUrl(value: string | null | undefined): boolean {
    if (!(typeof value === "string" && value.trim().length > 0)) return false;

    try {
        const url = new URL(value.trim());
        return url.protocol === "https:" || url.protocol === "http:";
    } catch {
        return false;
    }
}

function isValidHandle(value: string): boolean {
    return /^@[A-Za-z0-9_]{1,15}$/.test(value.trim());
}

export const SOCIAL_SHARING_DYNAMIC_RULES: DynamicRuleRegistry<
    SocialSharingRuleId,
    SocialSharingType
> = {
    // ---------------- Open Graph ----------------

    [SOCIAL_SHARING_RULE_IDS.OG_001_TITLE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_001_TITLE_MISSING,
        name: "Open Graph title missing",
        description: "The page does not have an Open Graph title.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.openGraph.title),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_002_DESCRIPTION_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_002_DESCRIPTION_MISSING,
        name: "Open Graph description missing",
        description: "The page does not have an Open Graph description.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.openGraph.description),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_003_IMAGE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_003_IMAGE_MISSING,
        name: "Open Graph image missing",
        description: "The page does not define an Open Graph image.",
        severity: "high",
        category: "social-sharing",
        analyze: (data) =>
            !data.socialSharing.openGraph.image.some(hasText),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_004_IMAGE_URL_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_004_IMAGE_URL_INVALID,
        name: "Open Graph image URL invalid",
        description: "An Open Graph image URL is not a valid absolute HTTP(S) URL.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) =>
            data.socialSharing.openGraph.image
                .filter(hasText)
                .some((image) => !isValidAbsoluteUrl(image)),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_005_IMAGE_ALT_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_005_IMAGE_ALT_MISSING,
        name: "Open Graph image alt missing",
        description: "The Open Graph image does not have alternative text.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) =>
            data.socialSharing.openGraph.image.some(hasText) &&
            !hasText(data.socialSharing.openGraph.imageAlt),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_006_URL_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_006_URL_MISSING,
        name: "Open Graph URL missing",
        description: "The page does not define its Open Graph sharing URL.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.openGraph.url),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_007_URL_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_007_URL_INVALID,
        name: "Open Graph URL invalid",
        description: "The Open Graph URL is not a valid absolute HTTP(S) URL.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) => {
            const url = data.socialSharing.openGraph.url;
            return hasText(url) && !isValidAbsoluteUrl(url);
        },
    },

    [SOCIAL_SHARING_RULE_IDS.OG_008_TYPE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_008_TYPE_MISSING,
        name: "Open Graph type missing",
        description: "The page does not define its Open Graph content type.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.openGraph.type),
    },

    [SOCIAL_SHARING_RULE_IDS.OG_009_IMAGE_DIMENSIONS_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_009_IMAGE_DIMENSIONS_INVALID,
        name: "Open Graph image dimensions invalid",
        description: "A provided Open Graph image dimension is not a positive finite number.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) => {
            const { imageWidth, imageHeight } =
                data.socialSharing.openGraph;

            return (
                (imageWidth !== null &&
                    (!Number.isFinite(imageWidth) || imageWidth <= 0)) ||
                (imageHeight !== null &&
                    (!Number.isFinite(imageHeight) || imageHeight <= 0))
            );
        },
    },

    // ---------------- Twitter Cards ----------------

    [SOCIAL_SHARING_RULE_IDS.TW_001_CARD_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_001_CARD_MISSING,
        name: "Twitter Card type missing",
        description: "The page does not define a Twitter Card type.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.twitterCard.card),
    },

    [SOCIAL_SHARING_RULE_IDS.TW_002_CARD_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_002_CARD_INVALID,
        name: "Twitter Card type invalid",
        description: "The Twitter Card type is not recognized.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) => {
            const card = data.socialSharing.twitterCard.card
                .trim()
                .toLowerCase();

            return (
                hasText(card) &&
                !["summary", "summary_large_image", "app", "player"].includes(card)
            );
        },
    },

    [SOCIAL_SHARING_RULE_IDS.TW_003_TITLE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_003_TITLE_MISSING,
        name: "Twitter Card title missing",
        description: "The page does not define a Twitter Card title.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.twitterCard.title),
    },

    [SOCIAL_SHARING_RULE_IDS.TW_004_DESCRIPTION_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_004_DESCRIPTION_MISSING,
        name: "Twitter Card description missing",
        description: "The page does not define a Twitter Card description.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) =>
            !hasText(data.socialSharing.twitterCard.description),
    },

    [SOCIAL_SHARING_RULE_IDS.TW_005_IMAGE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_005_IMAGE_MISSING,
        name: "Twitter Card image missing",
        description: "The page does not define a Twitter Card image.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) => {
            const twitter = data.socialSharing.twitterCard;

            if (twitter.card.trim().toLowerCase() === "player") {
                return false;
            }

            return !hasText(twitter.image);
        },
    },

    [SOCIAL_SHARING_RULE_IDS.TW_006_IMAGE_URL_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_006_IMAGE_URL_INVALID,
        name: "Twitter Card image URL invalid",
        description: "The Twitter Card image URL is not a valid absolute HTTP(S) URL.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) => {
            const twitter = data.socialSharing.twitterCard;

            if (
                twitter.card.trim().toLowerCase() === "player" ||
                !hasText(twitter.image)
            ) {
                return false;
            }

            return !isValidAbsoluteUrl(twitter.image);
        },
    },

    [SOCIAL_SHARING_RULE_IDS.TW_007_IMAGE_ALT_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_007_IMAGE_ALT_MISSING,
        name: "Twitter Card image alt missing",
        description: "The Twitter Card image does not have alternative text.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) => {
            const twitter = data.socialSharing.twitterCard;

            return (
                twitter.card.trim().toLowerCase() !== "player" &&
                hasText(twitter.image) &&
                !hasText(twitter.imageAlt)
            );
        },
    },

    [SOCIAL_SHARING_RULE_IDS.TW_008_SITE_HANDLE_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_008_SITE_HANDLE_INVALID,
        name: "Twitter site handle invalid",
        description: "The Twitter site handle does not match the expected @handle format.",
        severity: "low",
        category: "social-sharing",
        analyze: (data) => {
            const site = data.socialSharing.twitterCard.site;
            return hasText(site) && !isValidHandle(site);
        },
    },

    [SOCIAL_SHARING_RULE_IDS.TW_009_PLAYER_METADATA_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_009_PLAYER_METADATA_INVALID,
        name: "Twitter player metadata incomplete",
        description: "A player card has an invalid player URL or invalid dimensions.",
        severity: "medium",
        category: "social-sharing",
        analyze: (data) => {
            const twitter = data.socialSharing.twitterCard;

            if (twitter.card.trim().toLowerCase() !== "player") {
                return false;
            }

            const player = twitter.player;

            return (
                !isValidAbsoluteUrl(player.playerUrl) ||
                !Number.isFinite(player.width) ||
                player.width <= 0 ||
                !Number.isFinite(player.height) ||
                player.height <= 0
            );
        },
    },
};