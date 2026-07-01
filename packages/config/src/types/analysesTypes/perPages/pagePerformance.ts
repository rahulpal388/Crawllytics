export type PerformanceAnalysis = {
    // Network
    ttfb: number;
    responseTime: number;
    pageSize: number;

    compressionEnabled: boolean;
    cacheControlPresent: boolean;

    // JavaScript
    renderBlockingScripts: number;
    // thirdPartyScripts: number;
    inlineScripts: number;
    // asyncOrDeferredScripts: number;

    // CSS
    renderBlockingCss: number;
    inlineCssBytes: number;

    // Rendering
    estimatedTbtMs: number;

    // LCP
    lcpPreloaded: boolean;
    lcpEagerLoaded: boolean;

    // Resource Hints
    preconnectCount: number;
    preloadCount: number;
    prefetchCount: number;

}