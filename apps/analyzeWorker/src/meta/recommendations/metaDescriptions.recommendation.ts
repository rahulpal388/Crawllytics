import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";

export const META_DESCRIPTION_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_META_DESCRIPTION]: {
        title: "Missing meta description",
        description: "The page does not contain a meta description.",
        whyItMatters:
            "Search engines often use the meta description as the search result snippet. Missing descriptions can reduce click-through rates.",
        howToFix: [
            "Add a <meta name=\"description\"> tag to the page.",
            "Write a unique summary describing the page content.",
            "Include the primary keyword naturally without keyword stuffing."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    },

    [META_ISSUE_CODES.MULTIPLE_META_DESCRIPTIONS]: {
        title: "Multiple meta descriptions detected",
        description: "The page contains more than one meta description.",
        whyItMatters:
            "Multiple meta descriptions can confuse search engines and may cause unexpected snippets to be displayed.",
        howToFix: [
            "Keep only one meta description tag.",
            "Remove duplicate meta description tags.",
            "Verify templates or JavaScript are not injecting duplicates."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    },

    [META_ISSUE_CODES.EMPTY_META_DESCRIPTION]: {
        title: "Empty meta description",
        description: "The page contains a meta description tag with no content.",
        whyItMatters:
            "An empty meta description provides no useful information for search result snippets.",
        howToFix: [
            "Replace the empty description with meaningful content.",
            "Summarize the page accurately.",
            "Avoid generating empty meta description tags."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    },

    [META_ISSUE_CODES.DUPLICATE_META_DESCRIPTION]: {
        title: "Duplicate meta description",
        description: "The same meta description is used on multiple pages.",
        whyItMatters:
            "Duplicate descriptions make it harder for search engines to distinguish pages and can reduce click-through rates.",
        howToFix: [
            "Write a unique meta description for every important page.",
            "Include page-specific details.",
            "Avoid using the same template description across multiple pages."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    },

    [META_ISSUE_CODES.META_DESCRIPTION_TOO_SHORT]: {
        title: "Meta description is too short",
        description: "The meta description is shorter than the recommended length.",
        whyItMatters:
            "Short descriptions often fail to communicate enough information to encourage users to click.",
        howToFix: [
            "Expand the description to better summarize the page.",
            "Include important information naturally.",
            "Aim for approximately 70–160 characters."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    },

    [META_ISSUE_CODES.META_DESCRIPTION_TOO_LONG]: {
        title: "Meta description is too long",
        description: "The meta description exceeds the recommended length.",
        whyItMatters:
            "Long descriptions may be truncated in search results, hiding important information.",
        howToFix: [
            "Remove unnecessary words.",
            "Place the most important information near the beginning.",
            "Keep the description concise and informative."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    },

    [META_ISSUE_CODES.META_DESCRIPTION_PIXEL_TOO_WIDE]: {
        title: "Meta description exceeds recommended pixel width",
        description: "The rendered meta description is wider than Google's recommended display width.",
        whyItMatters:
            "Google truncates snippets based on rendered pixel width, not character count.",
        howToFix: [
            "Shorten long sentences.",
            "Move key information toward the beginning.",
            "Keep the rendered width within Google's recommended limits."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SNIPPLETS
        ]
    }
} as const;