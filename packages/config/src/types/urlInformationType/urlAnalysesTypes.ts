

export type UrlAnalysesType = {
    urlLength: number;
    urlDepth: number;
    isBlockedByRobotsTxt: boolean;
    hasQueryParams: boolean;
    queryParams: string[];
    hasFragment: boolean;
    hasUppercase: boolean;
    hasUnderscores: boolean;
    hasSpaces: boolean;
    hasNonAscii: boolean;
    hasFileExtension: boolean;
    fileExtension: string[];
    hasRepetitivePath: boolean;
    domainExtension: string | null;
}