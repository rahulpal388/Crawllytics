import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";


export const OPEN_GRAPH_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_OPEN_GRAPH]: {
        title: "Missing Open Graph metadata",
        description: "The page does not contain Open Graph metadata.",
        whyItMatters:
            "Open Graph tags control how pages appear when shared on social media platforms such as Facebook, LinkedIn, and Slack.",
        howToFix: [
            "Add the required Open Graph meta tags.",
            "Include og:title, og:description, og:image, og:url, and og:type at a minimum.",
            "Ensure the values accurately represent the page content."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_TITLE]: {
        title: "Missing Open Graph title",
        description: "The page does not define the og:title property.",
        whyItMatters:
            "The Open Graph title is typically displayed as the headline when the page is shared on social platforms.",
        howToFix: [
            "Add an og:title property.",
            "Use a concise and descriptive title.",
            "Keep it consistent with the page title while optimizing for social sharing."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_DESCRIPTION]: {
        title: "Missing Open Graph description",
        description: "The page does not define the og:description property.",
        whyItMatters:
            "The description helps users understand the content before clicking a shared link.",
        howToFix: [
            "Add an og:description property.",
            "Summarize the page clearly.",
            "Write a compelling description suitable for social media."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_IMAGE]: {
        title: "Missing Open Graph image",
        description: "The page does not specify an og:image.",
        whyItMatters:
            "Most social platforms rely on og:image to generate visually appealing link previews.",
        howToFix: [
            "Specify a high-quality image using og:image.",
            "Use an absolute HTTPS URL.",
            "Ensure the image is accessible and meets platform recommendations."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_URL]: {
        title: "Missing Open Graph URL",
        description: "The page does not define the og:url property.",
        whyItMatters:
            "The Open Graph URL identifies the canonical URL for social sharing and engagement metrics.",
        howToFix: [
            "Add an og:url property.",
            "Use the preferred canonical URL.",
            "Use a fully qualified HTTPS URL."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_TYPE]: {
        title: "Missing Open Graph type",
        description: "The page does not define the og:type property.",
        whyItMatters:
            "The content type helps social platforms interpret and display shared content correctly.",
        howToFix: [
            "Specify an appropriate og:type value.",
            "Use values such as website, article, product, or video depending on the page."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_SITE_NAME]: {
        title: "Missing Open Graph site name",
        description: "The page does not define the og:site_name property.",
        whyItMatters:
            "The site name helps users identify the source of shared content and improves brand recognition.",
        howToFix: [
            "Add an og:site_name property.",
            "Use your website or brand name consistently across all pages."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_LOCALE]: {
        title: "Missing Open Graph locale",
        description: "The page does not define the og:locale property.",
        whyItMatters:
            "The locale helps social platforms understand the language and regional settings of the content.",
        howToFix: [
            "Add an og:locale property.",
            "Use the appropriate locale format such as en_US."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_VIDEO]: {
        title: "Missing Open Graph video",
        description: "The page references video content but does not define og:video metadata.",
        whyItMatters:
            "Video metadata enables richer previews on supported social platforms.",
        howToFix: [
            "Add og:video for pages containing primary video content.",
            "Provide a valid HTTPS URL to the video.",
            "Include related video metadata when applicable."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    },

    [META_ISSUE_CODES.MISSING_OG_AUDIO]: {
        title: "Missing Open Graph audio",
        description: "The page references audio content but does not define og:audio metadata.",
        whyItMatters:
            "Audio metadata improves previews for pages whose primary content is audio.",
        howToFix: [
            "Add og:audio for pages containing primary audio content.",
            "Use an accessible HTTPS URL.",
            "Include appropriate audio metadata where supported."
        ],
        documentationLinks: [
            META_DOCUMENTATION.OPEN_GRAPH_PROTOCOL
        ]
    }
} as const;