import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";

export const TWITTER_CARD_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_TWITTER_CARD]: {
        title: "Missing Twitter Card metadata",
        description: "The page does not contain Twitter Card metadata.",
        whyItMatters:
            "Twitter Card tags control how content is displayed when shared on X (formerly Twitter) and are supported by many messaging platforms.",
        howToFix: [
            "Add Twitter Card meta tags to the page.",
            "At a minimum, include twitter:card, twitter:title, twitter:description, and twitter:image.",
            "Ensure the metadata accurately represents the page content."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_CARD_TYPE]: {
        title: "Missing Twitter Card type",
        description: "The page does not define the twitter:card property.",
        whyItMatters:
            "The card type determines how the shared content is rendered on X and other platforms that support Twitter Cards.",
        howToFix: [
            "Add the twitter:card meta tag.",
            "Use an appropriate value such as 'summary' or 'summary_large_image'."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_TITLE]: {
        title: "Missing Twitter title",
        description: "The page does not define twitter:title.",
        whyItMatters:
            "The title is displayed prominently in Twitter Card previews and helps users understand the shared content.",
        howToFix: [
            "Add a twitter:title meta tag.",
            "Use a concise and descriptive title.",
            "Keep it consistent with the page title where appropriate."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_DESCRIPTION]: {
        title: "Missing Twitter description",
        description: "The page does not define twitter:description.",
        whyItMatters:
            "The description provides additional context and encourages users to engage with shared content.",
        howToFix: [
            "Add a twitter:description meta tag.",
            "Write a clear summary of the page.",
            "Keep the description concise and relevant."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_IMAGE]: {
        title: "Missing Twitter image",
        description: "The page does not define twitter:image.",
        whyItMatters:
            "Images significantly improve the appearance and engagement of shared links on X.",
        howToFix: [
            "Add a twitter:image meta tag.",
            "Use a high-quality image.",
            "Provide an absolute HTTPS URL that is publicly accessible."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_SITE]: {
        title: "Missing Twitter site account",
        description: "The page does not define twitter:site.",
        whyItMatters:
            "The twitter:site property associates shared content with the website's official X account.",
        howToFix: [
            "Add the twitter:site meta tag.",
            "Use the official X username in the format @username."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_CREATOR]: {
        title: "Missing Twitter creator account",
        description: "The page does not define twitter:creator.",
        whyItMatters:
            "The creator account identifies the author or content creator and provides additional attribution.",
        howToFix: [
            "Add the twitter:creator meta tag.",
            "Use the author's or organization's official X username.",
            "Omit it only when no creator account exists."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    },

    [META_ISSUE_CODES.MISSING_TWITTER_PLAYER]: {
        title: "Missing Twitter player metadata",
        description: "The page contains player content but does not define twitter:player metadata.",
        whyItMatters:
            "Player Cards enable supported video and interactive media to be embedded directly within X.",
        howToFix: [
            "Add the required twitter:player metadata.",
            "Provide a secure HTTPS player URL.",
            "Include the required player width and height properties."
        ],
        documentationLinks: [
            META_DOCUMENTATION.X_CARDS
        ]
    }
} as const;