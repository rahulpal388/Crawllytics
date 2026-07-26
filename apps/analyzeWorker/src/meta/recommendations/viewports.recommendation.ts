import { META_DOCUMENTATION } from "@/meta/documentation.js";
import { META_ISSUE_CODES } from "@/meta/issuesCode.js";


export const VIEWPORT_RECOMMENDATIONS = {
    [META_ISSUE_CODES.MISSING_VIEWPORT]: {
        title: "Missing viewport meta tag",
        description: "The page does not contain a viewport meta tag.",
        whyItMatters:
            "Without a viewport tag, mobile browsers may render the page at desktop width, resulting in poor usability and affecting mobile search performance.",
        howToFix: [
            "Add a viewport meta tag to the page.",
            'Use content="width=device-width, initial-scale=1".',
            "Test the page on multiple mobile devices."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.MULTIPLE_VIEWPORTS]: {
        title: "Multiple viewport meta tags detected",
        description: "The page contains more than one viewport meta tag.",
        whyItMatters:
            "Multiple viewport definitions can produce inconsistent behavior across browsers and devices.",
        howToFix: [
            "Keep only one viewport meta tag.",
            "Remove duplicate viewport declarations.",
            "Ensure templates or JavaScript are not injecting additional viewport tags."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.MISSING_VIEWPORT_WIDTH]: {
        title: "Missing viewport width",
        description: "The viewport tag does not specify the width property.",
        whyItMatters:
            "The width=device-width directive allows pages to scale correctly on different screen sizes.",
        howToFix: [
            "Add width=device-width to the viewport content.",
            "Avoid fixed-width layouts for mobile devices."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.MISSING_INITIAL_SCALE]: {
        title: "Missing initial-scale",
        description: "The viewport tag does not specify an initial scale.",
        whyItMatters:
            "An initial scale helps browsers render the page consistently across devices.",
        howToFix: [
            "Add initial-scale=1 to the viewport tag.",
            "Avoid unnecessary zoom scaling unless required."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.INVALID_MINIMUM_SCALE]: {
        title: "Invalid minimum-scale value",
        description: "The viewport tag specifies an invalid minimum-scale value.",
        whyItMatters:
            "Invalid scaling values can negatively affect usability and accessibility on mobile devices.",
        howToFix: [
            "Use a valid numeric minimum-scale value.",
            "Avoid restricting user zoom unnecessarily."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.INVALID_MAXIMUM_SCALE]: {
        title: "Invalid maximum-scale value",
        description: "The viewport tag specifies an invalid maximum-scale value.",
        whyItMatters:
            "Improper maximum-scale values may reduce usability and accessibility for users who rely on zooming.",
        howToFix: [
            "Use a valid numeric maximum-scale value.",
            "Allow sufficient zoom for accessibility."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.USER_ZOOM_DISABLED]: {
        title: "User zoom is disabled",
        description: "The viewport configuration prevents users from zooming.",
        whyItMatters:
            "Disabling zoom makes content harder to read for users with visual impairments and can violate accessibility best practices.",
        howToFix: [
            "Remove user-scalable=no.",
            "Avoid setting maximum-scale=1 unless absolutely necessary.",
            "Allow users to zoom the page."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.MISSING_VIEWPORT_FIT]: {
        title: "Missing viewport-fit directive",
        description: "The viewport tag does not specify viewport-fit.",
        whyItMatters:
            "viewport-fit=cover enables content to use the full display area on devices with display cutouts or rounded corners.",
        howToFix: [
            "Add viewport-fit=cover if your layout supports edge-to-edge rendering.",
            "Test the layout on devices with display cutouts."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    },

    [META_ISSUE_CODES.MISSING_INTERACTIVE_WIDGET]: {
        title: "Missing interactive-widget directive",
        description: "The viewport tag does not specify the interactive-widget property.",
        whyItMatters:
            "The interactive-widget directive helps browsers manage viewport behavior when virtual keyboards are displayed.",
        howToFix: [
            "Add an appropriate interactive-widget value if your application benefits from it.",
            "Test forms and input fields on mobile devices."
        ],
        documentationLinks: [
            META_DOCUMENTATION.GOOGLE_VIEWPORT
        ]
    }
};