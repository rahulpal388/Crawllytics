

export type HTMLDocumentType = {
    htmlLang: string | null;
    charSet: string | null;
    // domElementCount: number;
    //  domDepth: number;
    htmlSizeBytes: number;
    textHtmlRatio: number;
    iFrameCount: number;
    iFrameSrc: string[];
    hasFlash: boolean;
    // commentCount: number;
    //    isRenderedByJs: boolean;
    jsFrameworks: string[];
}