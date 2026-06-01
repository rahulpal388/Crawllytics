






export type PerformanceSignalType = {
    scripts: ScriptType[];
    stylesheets: StylesheetType[];
    renderBlockingScripts: number;
    renderBlockingCss: number;
    thirdPartyScripts: ThirdPartyScript[];
    totalScriptCount: number;
    inlineScriptCount: number;
    totalScriptSizeBytes: number;
    lcpCandidate: LcpCandidateType;
    clsRiskScore: number;
    resourceHintCoverage: ResourceHintCoverage;
    inlineCssBytes: number;
    totalCssFiles: number;
    estimatedTbtMs: number;
    hasServiceWorker: boolean;
    hasPwaManifest: boolean;
    interstitialDetected: boolean;
    adsDotTxt: boolean;

}






export type ScriptType = {
    src: string | null;
    isInline: boolean;
    isAsync: boolean;
    isDefer: boolean;
    isModule: boolean;
    isRenderBlocking: boolean;
    isThirdParty: boolean;
    domain: string | null;
}

export type StylesheetType = {
    href: string | null;
    isInline: boolean;
    isRenderBlocking: boolean;
    media: string | null;
}


export type ThirdPartyScript = {
    domain: string;
    category: 'analytics' | 'ads' | 'chat' | 'social' | 'cdn' | 'other';
}


export type LcpCandidateType = {
    type: 'image' | 'text';
    src: string | null;
    isPreloaded: boolean;
    hasEagerLoading: boolean;
}

export type ResourceHintCoverage = {
    preconnectCount: number;
    preloadCount: number;
    prefetchCount: number;
    thirdPartyOriginsWithoutHint: string[];
}