import { analyzeAlternate } from "@/meta/analyzer/alternate.analyzer.js";
import { analyzeBranding } from "@/meta/analyzer/barnding.analyzer.js";
import { analyzeCanonical } from "@/meta/analyzer/canonicals.analyzer.js";
import { analyzeHreflang } from "@/meta/analyzer/hrefLang.analyzer.js";
import { analyzeManifest } from "@/meta/analyzer/manifest.analyzer.js";
import { analyzeMetaDescription } from "@/meta/analyzer/metaDescriptions.analyzer.js";
import { analyzeMetaRobots } from "@/meta/analyzer/metaRobots.analyzer.js";
import { analyzeOpenGraph } from "@/meta/analyzer/openGraph.analyzer.js";
import { analyzeResourceHints } from "@/meta/analyzer/resourceHint.analyzer.js";
import { analyzeTitle } from "@/meta/analyzer/title.analyzer.js";
import { analyzeTwitterCard } from "@/meta/analyzer/twitterCard.analyzer.js";
import { analyzeViewport } from "@/meta/analyzer/viewPort.analyzer.js";
import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";


export function metaData(
  metaInfo: GatherInfoType["htmlHeader"]
): PageMetaAnalysis {


  return {
    title: analyzeTitle(metaInfo.title),

    metaDescription: analyzeMetaDescription(
      metaInfo.meta.metaDescription
    ),

    metaRobots: analyzeMetaRobots(
      metaInfo.meta.metaRobot
    ),

    canonical: analyzeCanonical(
      metaInfo.meta.Canonical
    ),

    openGraph: analyzeOpenGraph(
      metaInfo.meta.openGraph
    ),

    twitterCard: analyzeTwitterCard(
      metaInfo.twitterCard
    ),

    viewport: analyzeViewport(
      metaInfo.meta.metaViewport
    ),

    hreflang: analyzeHreflang(
      metaInfo.hreflang
    ),

    alternate: analyzeAlternate(
      metaInfo.alternate
    ),

    branding: analyzeBranding(
      metaInfo.sitename,
      metaInfo.favicon
    ),

    resourceHints: analyzeResourceHints(
      metaInfo.resourceHints
    ),

    manifest: analyzeManifest(
      metaInfo.manifest
    )
  };
}