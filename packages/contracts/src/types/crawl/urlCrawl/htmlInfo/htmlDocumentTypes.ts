export type HTMLDocumentType = {
  htmlLang: string | null;
  charSet: string | null;
  htmlSizeBytes: number;
  textHtmlRatio: number;
  domElementCount: number;
  hasMainTag: boolean;
  hasNoscript: boolean;
  hasInlineStyles: boolean;
  inlineScriptCount: number;
  iFrameCount: number;
  iFrameSrc: string[];
  hasFlash: boolean;
  jsFrameworks: string[];
};
