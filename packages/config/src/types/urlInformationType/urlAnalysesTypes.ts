

export type UrlAnalysesType = {
    urlLength: number;
    urlDepth: number;
    hasQueryParams: boolean;
    queryParams: string[];
    hasFragment: boolean;
    hasUppercase: boolean;
    hasUnderscores: boolean;
    hasSpaces: boolean;
    hasNonAscii: boolean;
    hasFileExtension: boolean;
    fileExtension: string | null;
    urlCategory: 'homepage' | 'blog' | 'product' | 'category' | 'other';
    hasRepetitivePath: boolean;
    domainExtension: string | null;
}