export const META_ISSUE_CODES = {
    // ==========================================================
    // Title
    // ==========================================================

    MISSING_TITLE: "MISSING_TITLE",
    MULTIPLE_TITLES: "MULTIPLE_TITLES",
    EMPTY_TITLE: "EMPTY_TITLE",
    DUPLICATE_TITLE: "DUPLICATE_TITLE",
    TITLE_TOO_SHORT: "TITLE_TOO_SHORT",
    TITLE_TOO_LONG: "TITLE_TOO_LONG",
    TITLE_PIXEL_TOO_WIDE: "TITLE_PIXEL_TOO_WIDE",

    // ==========================================================
    // Meta Description
    // ==========================================================

    MISSING_META_DESCRIPTION: "MISSING_META_DESCRIPTION",
    MULTIPLE_META_DESCRIPTIONS: "MULTIPLE_META_DESCRIPTIONS",
    EMPTY_META_DESCRIPTION: "EMPTY_META_DESCRIPTION",
    DUPLICATE_META_DESCRIPTION: "DUPLICATE_META_DESCRIPTION",
    META_DESCRIPTION_TOO_SHORT: "META_DESCRIPTION_TOO_SHORT",
    META_DESCRIPTION_TOO_LONG: "META_DESCRIPTION_TOO_LONG",
    META_DESCRIPTION_PIXEL_TOO_WIDE: "META_DESCRIPTION_PIXEL_TOO_WIDE",

    // ==========================================================
    // Meta Robots
    // ==========================================================

    MISSING_META_ROBOTS: "MISSING_META_ROBOTS",
    MULTIPLE_META_ROBOTS: "MULTIPLE_META_ROBOTS",

    META_NOINDEX: "META_NOINDEX",
    META_NOFOLLOW: "META_NOFOLLOW",
    META_NOARCHIVE: "META_NOARCHIVE",
    META_NOSNIPPET: "META_NOSNIPPET",
    META_NOIMAGEINDEX: "META_NOIMAGEINDEX",

    INDEX_NOINDEX_CONFLICT: "INDEX_NOINDEX_CONFLICT",
    FOLLOW_NOFOLLOW_CONFLICT: "FOLLOW_NOFOLLOW_CONFLICT",

    MAX_SNIPPET_INVALID: "MAX_SNIPPET_INVALID",
    MAX_IMAGE_PREVIEW_INVALID: "MAX_IMAGE_PREVIEW_INVALID",
    MAX_VIDEO_PREVIEW_INVALID: "MAX_VIDEO_PREVIEW_INVALID",

    INDEXIFEMBEDDED_WITHOUT_NOINDEX:
        "INDEXIFEMBEDDED_WITHOUT_NOINDEX",

    UNAVAILABLE_AFTER_EXPIRED: "UNAVAILABLE_AFTER_EXPIRED",

    // ==========================================================
    // Canonical
    // ==========================================================

    MISSING_CANONICAL: "MISSING_CANONICAL",
    MULTIPLE_CANONICALS: "MULTIPLE_CANONICALS",

    INVALID_CANONICAL: "INVALID_CANONICAL",

    RELATIVE_CANONICAL: "RELATIVE_CANONICAL",

    NON_HTTPS_CANONICAL: "NON_HTTPS_CANONICAL",

    CANONICAL_TO_EXTERNAL_DOMAIN:
        "CANONICAL_TO_EXTERNAL_DOMAIN",

    CANONICAL_TO_DIFFERENT_PAGE:
        "CANONICAL_TO_DIFFERENT_PAGE",

    // ==========================================================
    // Open Graph
    // ==========================================================

    MISSING_OPEN_GRAPH: "MISSING_OPEN_GRAPH",

    MISSING_OG_TITLE: "MISSING_OG_TITLE",
    MISSING_OG_DESCRIPTION: "MISSING_OG_DESCRIPTION",
    MISSING_OG_IMAGE: "MISSING_OG_IMAGE",
    MISSING_OG_URL: "MISSING_OG_URL",
    MISSING_OG_TYPE: "MISSING_OG_TYPE",
    MISSING_OG_SITE_NAME: "MISSING_OG_SITE_NAME",
    MISSING_OG_LOCALE: "MISSING_OG_LOCALE",
    MISSING_OG_VIDEO: "MISSING_OG_VIDEO",
    MISSING_OG_AUDIO: "MISSING_OG_AUDIO",

    // ==========================================================
    // Twitter Card
    // ==========================================================

    MISSING_TWITTER_CARD: "MISSING_TWITTER_CARD",

    MISSING_TWITTER_CARD_TYPE:
        "MISSING_TWITTER_CARD_TYPE",

    MISSING_TWITTER_TITLE: "MISSING_TWITTER_TITLE",
    MISSING_TWITTER_DESCRIPTION:
        "MISSING_TWITTER_DESCRIPTION",

    MISSING_TWITTER_IMAGE: "MISSING_TWITTER_IMAGE",

    MISSING_TWITTER_SITE: "MISSING_TWITTER_SITE",
    MISSING_TWITTER_CREATOR:
        "MISSING_TWITTER_CREATOR",
    MISSING_TWITTER_PLAYER:
        "MISSING_TWITTER_PLAYER",

    // ==========================================================
    // Viewport
    // ==========================================================

    MISSING_VIEWPORT: "MISSING_VIEWPORT",
    MULTIPLE_VIEWPORTS: "MULTIPLE_VIEWPORTS",

    MISSING_VIEWPORT_WIDTH:
        "MISSING_VIEWPORT_WIDTH",

    MISSING_INITIAL_SCALE:
        "MISSING_INITIAL_SCALE",

    INVALID_MINIMUM_SCALE:
        "INVALID_MINIMUM_SCALE",

    INVALID_MAXIMUM_SCALE:
        "INVALID_MAXIMUM_SCALE",

    USER_ZOOM_DISABLED:
        "USER_ZOOM_DISABLED",

    MISSING_VIEWPORT_FIT:
        "MISSING_VIEWPORT_FIT",

    MISSING_INTERACTIVE_WIDGET:
        "MISSING_INTERACTIVE_WIDGET",

    // ==========================================================
    // Hreflang
    // ==========================================================

    MISSING_HREFLANG: "MISSING_HREFLANG",
    MULTIPLE_HREFLANG: "MULTIPLE_HREFLANG",
    INVALID_HREFLANG_CODE: "INVALID_HREFLANG_CODE",
    MISSING_X_DEFAULT: "MISSING_X_DEFAULT",
    MISSING_HREFLANG_RETURN_LINK:
        "MISSING_HREFLANG_RETURN_LINK",
    RELATIVE_HREFLANG_URL: "RELATIVE_HREFLANG_URL",
    BROKEN_HREFLANG_URL: "BROKEN_HREFLANG_URL",
    // ==========================================================
    // Alternate
    // ==========================================================

    MISSING_ALTERNATE: "MISSING_ALTERNATE",
    MULTIPLE_ALTERNATE: "MULTIPLE_ALTERNATE",

    // ==========================================================
    // Branding
    // ==========================================================

    MISSING_SITE_NAME:
        "MISSING_SITE_NAME",

    MISSING_FAVICON:
        "MISSING_FAVICON",

    MULTIPLE_FAVICONS:
        "MULTIPLE_FAVICONS",

    // ==========================================================
    // Resource Hints
    // ==========================================================

    MISSING_PRECONNECT:
        "MISSING_PRECONNECT",

    MISSING_DNS_PREFETCH:
        "MISSING_DNS_PREFETCH",

    MISSING_PRELOAD:
        "MISSING_PRELOAD",

    MISSING_PREFETCH:
        "MISSING_PREFETCH",

    MISSING_MODULE_PRELOAD:
        "MISSING_MODULE_PRELOAD",



    // ==========================================================
    // Manifest
    // ==========================================================

    MISSING_WEB_MANIFEST:
        "MISSING_WEB_MANIFEST",

    // ==========================================================
    // Cross Metadata
    // ==========================================================



} as const;

export type MetaIssueCode =
    typeof META_ISSUE_CODES[keyof typeof META_ISSUE_CODES];