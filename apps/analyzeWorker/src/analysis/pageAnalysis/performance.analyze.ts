import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PerformanceAnalysis } from "@repo/config/types/analysesTypes/perPages/pagePerformance";

export function performanceAnalysis(gatherInfo: GatherInfoType): PerformanceAnalysis {
  const ttfb = gatherInfo.networkInfo.timeToFirstByte;
  const responseTime = gatherInfo.networkInfo.totalResponseTime;
  const pageSize = gatherInfo.networkInfo.transferSize;

  const compressionEnabled = gatherInfo.networkInfo.compressionEncoding !== null;
  const cacheControlPresent = gatherInfo.networkInfo.responseHeaders.cacheControl !== null;

  const renderBlockingScripts = gatherInfo.performanceSignals.renderBlockingScripts;
  const inlineScripts = gatherInfo.performanceSignals.inlineScriptCount;

  const renderBlockingCss = gatherInfo.performanceSignals.renderBlockingCss;
  const inlineCssBytes = gatherInfo.performanceSignals.inlineCssBytes;

  const estimatedTbtMs = gatherInfo.performanceSignals.estimatedTbtMs;

  const lcpPreloaded = gatherInfo.performanceSignals.lcpCandidate.isPreloaded;
  const lcpEagerLoaded = gatherInfo.performanceSignals.lcpCandidate.hasEagerLoading;

  const preconnectCount = gatherInfo.performanceSignals.resourceHintCoverage.preconnectCount;
  const preloadCount = gatherInfo.performanceSignals.resourceHintCoverage.preloadCount;
  const prefetchCount = gatherInfo.performanceSignals.resourceHintCoverage.prefetchCount;

  return {
    ttfb,
    responseTime,
    pageSize,
    compressionEnabled,
    cacheControlPresent,
    renderBlockingScripts,
    inlineScripts,
    renderBlockingCss,
    inlineCssBytes,
    estimatedTbtMs,
    lcpPreloaded,
    lcpEagerLoaded,
    preconnectCount,
    preloadCount,
    prefetchCount,
  };
}
