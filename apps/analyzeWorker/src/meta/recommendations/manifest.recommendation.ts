import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";


export const MANIFEST_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_WEB_MANIFEST]: {
        title: "Missing web app manifest",
        description: "The page does not reference a web app manifest.",
        whyItMatters:
            "A web app manifest enables Progressive Web App (PWA) features such as installability, application icons, display mode, and a more app-like experience on supported devices.",
        howToFix: [
            'Add a <link rel="manifest"> element to the page.',
            "Ensure the manifest file is publicly accessible.",
            "Include required properties such as name, icons, start_url, and display.",
            "Validate the manifest using browser developer tools."
        ],
        documentationLinks: [
            META_DOCUMENTATION.WEB_APP_MANIFEST
        ]
    }
} as const;