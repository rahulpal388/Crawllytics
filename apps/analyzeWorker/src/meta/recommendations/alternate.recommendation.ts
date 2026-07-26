import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";



export const ALTERNATE_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_ALTERNATE]: {
        title: "Missing alternate links",
        description: "The page does not define any alternate link elements.",
        whyItMatters:
            "Alternate links help search engines understand relationships between different versions of the same content, such as AMP, mobile, language, or media-specific pages.",
        howToFix: [
            "Add alternate link elements when multiple versions of the page exist.",
            "Ensure each alternate URL points to the correct version.",
            "Remove unnecessary alternate links if no alternate content exists."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_ALTERNATE_PAGES
        ]
    },

    [META_ISSUE_CODES.MULTIPLE_ALTERNATE]: {
        title: "Multiple alternate links detected",
        description: "The page contains duplicate or excessive alternate link elements.",
        whyItMatters:
            "Duplicate alternate links can create ambiguity and increase page complexity without providing additional value.",
        howToFix: [
            "Remove duplicate alternate links.",
            "Keep only one alternate link for each unique relationship.",
            "Review templates to prevent duplicate generation."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_ALTERNATE_PAGES
        ]
    }
} as const;