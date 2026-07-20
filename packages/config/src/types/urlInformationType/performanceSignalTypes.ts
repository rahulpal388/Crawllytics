export type PerformanceSignalType = {
  scripts: ScriptType[];
  stylesheets: StylesheetType[];
  renderBlockingScripts: number;
  renderBlockingCss: number;
  totalScriptCount: number;
  inlineScriptCount: number;
  totalScriptSizeBytes: number;
  lcpCandidate: LcpCandidateType;
  resourceHintCoverage: ResourceHintCoverage;
  inlineCssBytes: number;
  totalCssFiles: number;
  estimatedTbtMs: number;
  hasServiceWorker: boolean;
  hasPwaManifest: boolean;
};

export type ScriptType = {
  src: string | null;
  isInline: boolean;
  isAsync: boolean;
  isDefer: boolean;
  isModule: boolean;
  isRenderBlocking: boolean;
  isThirdParty: boolean;
  domain: string | null;
};

export type StylesheetType = {
  href: string | null;
  isInline: boolean;
  isRenderBlocking: boolean;
  media: string | null;
};

export type LcpCandidateType = {
  type: "image" | "text";
  src: string | null;
  isPreloaded: boolean;
  hasEagerLoading: boolean;
};

export type ResourceHintCoverage = {
  preconnectCount: number;
  preloadCount: number;
  prefetchCount: number;
  thirdPartyOriginsWithoutHint: string[];
};
