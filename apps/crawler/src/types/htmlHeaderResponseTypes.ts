

export type HTMLHeaderType = {
    title: HTMLTitleType[],
    meta: {
        metaDescription: HTMLMetaDescriptionType[],
        metaRobot: HTMLMetaRobotType,
        Canonical: HTMLCanonicalType[],
        openGraph: HTMLOpenGraphType
    }
    metaViewport: HTMLMetaViewportType,
}


export type HTMLTitleType = {
    text: string;
    lengthChar: number;
    lengthPixel: number  // <- google truncates at ~580px;
    isDuplicate: boolean;
    isEmpty: boolean;
    exist: boolean
}

export type HTMLMetaDescriptionType = {
    text: string;
    lengthChar: number;
    lengthPixel: number  // <- google truncates at ~960px;
    isDuplicate: boolean;
    isEmpty: boolean;
    exist: boolean
}


export type HTMLMetaRobotType = {
    robotValue: string;  // "index" | "noindex"
    followValue: string;  // "follow" | "nofollow"
    snippetControl: string;
    imageControl: string;
    videoControl: string;
}
export type HTMLCanonicalType = {
    exists: boolean;
    canonicalUrl: string;
    isSelfReferencing: boolean;
    isCrossPage: boolean;
    isCrossDomain: boolean;
    isAbsoluteUrl: boolean
}

export type HTMLMetaViewportType = {
    exits: boolean;
    value: string; // "width=device-width, initial-scale=1"
    isMobileReady: boolean
}
export type HTMLOpenGraphType = {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
}