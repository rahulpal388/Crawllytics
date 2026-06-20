


export type PageIndexabilityAnalysis = {
    metaNoindex: boolean;
    metaNofollow: boolean;

    xRobotsNoindex: boolean;

    canonicalUrl: string | null;

    canonicalIsSelfReferencing: boolean;

    canonicalTargetIndexable: boolean;

    duplicateContentHash: string;

    indexabilityScore: number;
}