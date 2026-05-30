

export type HTMLHeaderType = {
    title: HTMLTitleType[],
    meta: {
        metaDescription: HTMLMetaDescriptionType[],
        metaRobot: HTMLMetaRobotType,
        Canonical: HTMLCanonicalType[],
        openGraph: HTMLOpenGraphType
        metaViewport: HTMLMetaViewportType,
    },
    hreflang: HreflangType[],
    pagination: PaginationType,
    twitterCard: TwitterCardType,
    favicon: FaviconType[],
    resourceHints: ResourceHintType[],

}


export type HTMLTitleType = {
    text: string;
    lengthChar: number;
    lengthPixel: number; // <- google truncates at ~600px;
}

export type HTMLMetaDescriptionType = {
    text: string;
    lengthChar: number;
    lengthPixel: number  // <- google truncates at ~960px;
}


// use this type for information analyses
// export type HTMLMetaRobotType = {
//     robotValue: string;  // "index" | "noindex"
//     followValue: string | null;  // "follow" | "nofollow"
//     maxSnippet: string | null;
//     maxImagePreview: string | null;
//     maxVideoPreview: string | null;
//     noArchive: string | null;
//     noImageIndex: string | null;
// }
export type HTMLMetaRobotType = {
    content: string
}

export type HTMLCanonicalType = {
    url: string;
    isSelf: boolean;
    isCrossPage: boolean;
    isCrossDomain: boolean;
    isAbsoluteUrl: boolean
}

export type HTMLOpenGraphType = {
    title: string;
    description: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
    url: string;
    type: string;
    siteName: string;
    locale: string;
}

export type HTMLMetaViewportType = {
    value: string; // "width=device-width, initial-scale=1"
    isMobileReady: boolean;
    hasInitialScale: boolean;
}

export type HreflangType = {
    lang: string; // "en", "en-US", "en-GB"
    href: string;
    hrefStatusCode: number | null;
    isReturn: boolean; // whether the hreflang points back to the same page (reciprocal)
    region: string | null; // "US", "GB"
}



export type PaginationType = {
    prev: string | null;
    next: string | null;
}

export type TwitterCardType = {
    card: string; // "summary", "summary_large_image", "app", "player"
    title: string;
    description: string;
    image: string;
    site: string; // twitter handle of the site
    creator: string; // twitter handle of the content creator
}





export type FaviconType = {
    href: string;
    type: string | null; // "image/png", "image/x-icon"
    sizes: string | null; // "16x16", "32x32", "any"
}


export type ResourceHintType = {
    rel: "preconnect" | "preload" | "prefetch" | "dns-prefetch";
    href: string;
    as: string | null; // "script", "style", "image", "font", etc.
}




