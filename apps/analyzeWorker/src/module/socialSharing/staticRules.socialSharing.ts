import {
    SOCIAL_SHARING_RULE_IDS,
    type SocialSharingRuleId,
} from "@/module/socialSharing/ruleId.socialSharing.js";
import { SEORules } from "@repo/contracts/types/analysesTypes/SEORules.Type";

export const socialSharingStaticRules: {
    [K in SocialSharingRuleId]: SEORules<K>;
} = {
    // ---------------- Open Graph ----------------

    [SOCIAL_SHARING_RULE_IDS.OG_001_TITLE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_001_TITLE_MISSING,
        name: "Open Graph title missing",
        description: "The page does not have an Open Graph title.",
        whyItMatters: "A title helps identify the page in social sharing previews.",
        recommendation: {
            description: "Add a descriptive Open Graph title.",
            steps: [
                "Write a concise title that describes the page.",
                "Add the og:title property to the document head.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta property="og:title" content="Your page title">.',
    },

    [SOCIAL_SHARING_RULE_IDS.OG_002_DESCRIPTION_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_002_DESCRIPTION_MISSING,
        name: "Open Graph description missing",
        description: "The page does not have an Open Graph description.",
        whyItMatters: "A description gives users context about a shared page.",
        recommendation: {
            description: "Add a meaningful Open Graph description.",
            steps: [
                "Write a concise summary of the page.",
                "Add the og:description property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta property="og:description" content="Page summary">.',
    },

    [SOCIAL_SHARING_RULE_IDS.OG_003_IMAGE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_003_IMAGE_MISSING,
        name: "Open Graph image missing",
        description: "The page does not define an Open Graph image.",
        whyItMatters: "A relevant image can make a shared link more recognizable and engaging.",
        recommendation: {
            description: "Provide an appropriate image for social previews.",
            steps: [
                "Choose an image that represents the page.",
                "Use a publicly accessible absolute URL.",
                "Add the og:image property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta property="og:image" content="https://example.com/image.jpg">.',
    },

    [SOCIAL_SHARING_RULE_IDS.OG_004_IMAGE_URL_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_004_IMAGE_URL_INVALID,
        name: "Open Graph image URL invalid",
        description: "At least one Open Graph image URL is not a valid absolute HTTP(S) URL.",
        whyItMatters: "Social platforms need a usable image URL to retrieve the preview image.",
        recommendation: {
            description: "Correct the invalid image URL.",
            steps: [
                "Check the URL syntax.",
                "Use an absolute HTTP or HTTPS URL.",
                "Verify that the image is publicly accessible.",
            ],
        },
        howToFix: null,
        fix: "Replace the invalid Open Graph image URL with a valid absolute HTTP(S) URL.",
    },

    [SOCIAL_SHARING_RULE_IDS.OG_005_IMAGE_ALT_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_005_IMAGE_ALT_MISSING,
        name: "Open Graph image alt missing",
        description: "The Open Graph image does not have alternative text.",
        whyItMatters: "Alternative text helps communicate an image's meaning to people using assistive technology.",
        recommendation: {
            description: "Add meaningful alternative text for the sharing image.",
            steps: [
                "Describe the image's relevant content.",
                "Add the og:image:alt property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta property="og:image:alt" content="Image description">.',
    },

    [SOCIAL_SHARING_RULE_IDS.OG_006_URL_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_006_URL_MISSING,
        name: "Open Graph URL missing",
        description: "The page does not define its Open Graph sharing URL.",
        whyItMatters: "A consistent sharing URL helps identify the page represented by the preview.",
        recommendation: {
            description: "Add the intended absolute page URL.",
            steps: [
                "Identify the preferred URL for the page.",
                "Add it as the og:url property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta property="og:url" content="https://example.com/page">.',
    },

    [SOCIAL_SHARING_RULE_IDS.OG_007_URL_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_007_URL_INVALID,
        name: "Open Graph URL invalid",
        description: "The Open Graph URL is not a valid absolute HTTP(S) URL.",
        whyItMatters: "An invalid sharing URL may cause problems identifying the intended page.",
        recommendation: {
            description: "Use the correct absolute URL for the page.",
            steps: [
                "Check the URL syntax and protocol.",
                "Confirm that the URL represents the intended page.",
            ],
        },
        howToFix: null,
        fix: "Replace the invalid og:url value with a valid absolute HTTP(S) URL.",
    },

    [SOCIAL_SHARING_RULE_IDS.OG_008_TYPE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_008_TYPE_MISSING,
        name: "Open Graph type missing",
        description: "The page does not define its Open Graph content type.",
        whyItMatters: "The content type describes the kind of page being shared.",
        recommendation: {
            description: "Specify an appropriate Open Graph type.",
            steps: [
                "Identify the type of content on the page.",
                "Add the og:type property, such as website or article.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta property="og:type" content="website">.',
    },

    [SOCIAL_SHARING_RULE_IDS.OG_009_IMAGE_DIMENSIONS_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.OG_009_IMAGE_DIMENSIONS_INVALID,
        name: "Open Graph image dimensions invalid",
        description: "A provided Open Graph image dimension is not a positive finite number.",
        whyItMatters: "Valid dimensions help describe the image's intended size.",
        recommendation: {
            description: "Correct the provided image dimensions.",
            steps: [
                "Check the actual image width and height.",
                "Use positive dimension values matching the image.",
                "Correct the og:image:width and og:image:height metadata.",
            ],
        },
        howToFix: null,
        fix: "Set provided Open Graph image dimensions to valid positive numbers.",
    },

    // ---------------- Twitter Cards ----------------

    [SOCIAL_SHARING_RULE_IDS.TW_001_CARD_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_001_CARD_MISSING,
        name: "Twitter Card type missing",
        description: "The page does not define a Twitter Card type.",
        whyItMatters: "The card type helps determine the intended link preview format.",
        recommendation: {
            description: "Specify an appropriate Twitter Card type.",
            steps: [
                "Choose the intended card format.",
                "Add the twitter:card property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="twitter:card" content="summary_large_image">.',
    },

    [SOCIAL_SHARING_RULE_IDS.TW_002_CARD_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_002_CARD_INVALID,
        name: "Twitter Card type invalid",
        description: "The Twitter Card type is not recognized by the analyzer.",
        whyItMatters: "An unsupported card type may prevent the intended preview from being generated.",
        recommendation: {
            description: "Use a recognized Twitter Card type.",
            steps: [
                "Choose summary, summary_large_image, app, or player.",
                "Ensure the selected type matches the intended preview.",
            ],
        },
        howToFix: null,
        fix: "Replace the card value with a recognized Twitter Card type.",
    },

    [SOCIAL_SHARING_RULE_IDS.TW_003_TITLE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_003_TITLE_MISSING,
        name: "Twitter Card title missing",
        description: "The page does not define a Twitter-specific title.",
        whyItMatters: "A title helps users understand which page a shared link represents.",
        recommendation: {
            description: "Provide a concise Twitter Card title.",
            steps: [
                "Write a descriptive title for the page.",
                "Add the twitter:title property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="twitter:title" content="Your page title">.',
    },

    [SOCIAL_SHARING_RULE_IDS.TW_004_DESCRIPTION_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_004_DESCRIPTION_MISSING,
        name: "Twitter Card description missing",
        description: "The page does not define a Twitter-specific description.",
        whyItMatters: "A description provides context about the shared content.",
        recommendation: {
            description: "Add a concise Twitter Card description.",
            steps: [
                "Write a relevant summary of the page.",
                "Add the twitter:description property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="twitter:description" content="Page summary">.',
    },

    [SOCIAL_SHARING_RULE_IDS.TW_005_IMAGE_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_005_IMAGE_MISSING,
        name: "Twitter Card image missing",
        description: "The page does not define a Twitter Card image.",
        whyItMatters: "A relevant image can improve the visual presentation of a shared link.",
        recommendation: {
            description: "Provide an appropriate card image when required by the selected card type.",
            steps: [
                "Choose an image representing the page.",
                "Provide an absolute image URL.",
                "Add the twitter:image property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="twitter:image" content="https://example.com/image.jpg">.',
    },

    [SOCIAL_SHARING_RULE_IDS.TW_006_IMAGE_URL_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_006_IMAGE_URL_INVALID,
        name: "Twitter Card image URL invalid",
        description: "The Twitter Card image URL is not a valid absolute HTTP(S) URL.",
        whyItMatters: "The platform needs a usable URL to retrieve the preview image.",
        recommendation: {
            description: "Correct the image URL.",
            steps: [
                "Check the URL syntax.",
                "Use an absolute HTTP or HTTPS URL.",
                "Verify that the image is publicly accessible.",
            ],
        },
        howToFix: null,
        fix: "Replace the invalid Twitter Card image URL with a valid absolute HTTP(S) URL.",
    },

    [SOCIAL_SHARING_RULE_IDS.TW_007_IMAGE_ALT_MISSING]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_007_IMAGE_ALT_MISSING,
        name: "Twitter Card image alt missing",
        description: "The Twitter Card image does not have alternative text.",
        whyItMatters: "Alternative text helps communicate image content to people using assistive technology.",
        recommendation: {
            description: "Add meaningful alternative text.",
            steps: [
                "Describe the image's relevant content.",
                "Add the twitter:image:alt property.",
            ],
        },
        howToFix: null,
        fix: 'Add <meta name="twitter:image:alt" content="Image description">.',
    },

    [SOCIAL_SHARING_RULE_IDS.TW_008_SITE_HANDLE_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_008_SITE_HANDLE_INVALID,
        name: "Twitter site handle invalid",
        description: "The provided Twitter site handle does not match the expected @handle format.",
        whyItMatters: "A correctly formatted handle helps identify the intended account associated with the card.",
        recommendation: {
            description: "Correct the site handle if one is provided.",
            steps: [
                "Check the intended account handle.",
                "Use the @ prefix followed by a valid handle.",
            ],
        },
        howToFix: null,
        fix: "Use a correctly formatted handle, such as @example.",
    },

    [SOCIAL_SHARING_RULE_IDS.TW_009_PLAYER_METADATA_INVALID]: {
        ruleId: SOCIAL_SHARING_RULE_IDS.TW_009_PLAYER_METADATA_INVALID,
        name: "Twitter player metadata incomplete",
        description: "A player card has an invalid player URL or invalid dimensions.",
        whyItMatters: "Valid player metadata is needed to describe the embedded media preview.",
        recommendation: {
            description: "Provide a valid player URL and positive dimensions.",
            steps: [
                "Set an absolute HTTP(S) player URL.",
                "Provide positive player width and height values.",
                "Test the player card with the relevant platform preview tools.",
            ],
        },
        howToFix: null,
        fix: "Correct twitter:player, twitter:player:width, and twitter:player:height.",
    },
};