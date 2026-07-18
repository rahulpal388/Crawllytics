import * as Cheerio from "cheerio";
import { PerformanceSignalType } from "@repo/config/types/urlInformationType/performanceSignalTypes";

import { getScriptInfo } from "@/utils/getScriptInfo.js";
import { getStyleSheetInfo } from "@/utils/getStyleSheetInfo.js";
import { findLcpCandidate } from "@/utils/findlcpCandiate.js";
import { findResourceHintCoverage } from "@/utils/findResourceHintCoverage.js";

export function performanceSignal($: Cheerio.CheerioAPI, url: URL): PerformanceSignalType {
  const scripts = getScriptInfo($, url);

  const stylesheets = getStyleSheetInfo($);

  const renderBlockingScripts = scripts.filter((script) => script.isRenderBlocking).length;

  const renderBlockingCss = stylesheets.filter((stylesheet) => stylesheet.isRenderBlocking).length;

  const totalScriptCount = scripts.length;

  const inlineScriptCount = scripts.filter((script) => script.isInline).length;

  const lcpCandidate = findLcpCandidate($);

  const resourceHintCoverage = findResourceHintCoverage($, url.href);

  let inlineCssBytes = 0;

  $("style").each((_, el) => {
    const css = $(el).html() ?? "";

    inlineCssBytes += Buffer.byteLength(css, "utf8");
  });

  const totalCssFiles = stylesheets.filter((stylesheet) => !stylesheet.isInline).length;

  const estimatedTbtMs = renderBlockingScripts * 100 + totalScriptCount * 20;

  const hasServiceWorker = /serviceWorker\.register/i.test($.html());

  const hasPwaManifest = $('link[rel="manifest"]').length > 0;

  // Placeholder until implemented
  const totalScriptSizeBytes = 0;

  return {
    scripts,
    stylesheets,

    renderBlockingScripts,
    renderBlockingCss,

    totalScriptCount,
    inlineScriptCount,
    totalScriptSizeBytes,

    lcpCandidate,

    resourceHintCoverage,

    inlineCssBytes,
    totalCssFiles,

    estimatedTbtMs,

    hasServiceWorker,
    hasPwaManifest,
  };
}
