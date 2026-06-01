

export type HTMLDocumentType = {
    hasDoctype: boolean;
    htmlLang: string | null;
    charSet: string | null;
    domElementCount: number;
    domDepth: number;
    htmlSizeBytes: number;
    textHtmlRatio: number;
    iFrameCount: number;
    iFrameSrc: string[];
    hasFlash: boolean;
    commentCount: number;
    contentType: string | null;
    isRenderedByJs: boolean;
    jsFrameworks: string[];
}