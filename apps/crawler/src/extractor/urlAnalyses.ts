import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes";

export function urlAnalyses(url: URL): UrlAnalysesType {

    const urlLength = url.href.length;
    const segment = url.pathname.split("/").filter(Boolean);
    const urlDepth = segment.length;
    const hasQueryParams = url.search.length > 0;
    const queryParams = [...url.searchParams.keys()];
    const hasFragment = url.hash.length > 0;
    const hasUppercase = /[A-Z]/.test(url.pathname);
    const hasUnderscores = url.pathname.includes("_");
    const hasSpaces = url.pathname.includes(" ");
    const hasNonAscii = /[^\x00-\x7F]/.test(url.pathname);
    const match = url.pathname.match(/\.[a-z0-9]+$/i);

    const hasFileExtension = !!match;
    const fileExtension = match ? match.map(m => m.toLowerCase()) : [];

    const uniqueSegment = new Set(segment);
    const hasRepetitivePath = uniqueSegment.size !== segment.length;
    const domainParts = url.hostname.split(".");
    const domainExtension = domainParts.length > 1 ? domainParts[domainParts.length - 1] || null : null;

    return {
        urlLength,
        urlDepth,
        hasQueryParams,
        queryParams,
        hasFileExtension,
        fileExtension,
        hasFragment,
        hasUppercase,
        hasUnderscores,
        hasSpaces,
        hasNonAscii,
        hasRepetitivePath,
        domainExtension,
        isBlockedByRobotsTxt: true
    }



}