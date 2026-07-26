import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";



export const BRANDING_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_SITE_NAME]: {
        title: "Missing site name",
        description: "The page does not define a site name.",
        whyItMatters:
            "A consistent site name helps search engines and social platforms identify your brand and improves recognition across search results and link previews.",
        howToFix: [
            "Add a site name using the appropriate metadata.",
            "Use your official brand or website name consistently across all pages.",
            "Ensure the site name matches your branding."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_SITE_NAME
        ]
    },

    [META_ISSUE_CODES.MISSING_FAVICON]: {
        title: "Missing favicon",
        description: "The page does not specify a favicon.",
        whyItMatters:
            "Favicons help users recognize your website in browser tabs, bookmarks, and Google Search results on supported devices.",
        howToFix: [
            "Add a favicon using a <link rel=\"icon\"> element.",
            "Use a supported image format such as PNG, ICO, or SVG.",
            "Ensure the favicon is publicly accessible."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_FAVICON
        ]
    },

    [META_ISSUE_CODES.MULTIPLE_FAVICONS]: {
        title: "Multiple favicons detected",
        description: "The page defines more than one favicon.",
        whyItMatters:
            "Multiple favicon declarations can create ambiguity about which icon browsers and search engines should use.",
        howToFix: [
            "Keep only the required favicon declarations.",
            "Remove duplicate or obsolete favicon links.",
            "Ensure the primary favicon is consistent across the website."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_FAVICON
        ]
    }
} as const;