import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageMetaAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
export function metaAnalyze(metaInfo: GatherInfoType["htmlHeader"]): PageMetaAnalysis {
  // -------------------- title --------------------------
  const title = metaInfo.title;
  const hasTitle = title.length > 0;
  const hasMultipleTitles = title.length > 1;
  const duplicateTitle = title
    .map((t) => t.text)
    .some((text, index, arr) => arr.indexOf(text) !== index);

  // -------------------- meta description --------------------------
  const metaDescription = metaInfo.meta.metaDescription;
  const hasMetaDescription = metaDescription.length > 0;
  const duplicateMetaDescription = metaDescription
    .map((md) => md.text)
    .some((text, index, arr) => arr.indexOf(text) !== index);

  // -------------------- robots --------------------------
  const hasMetaRobots = metaInfo.meta.metaRobot.length > 0;
  const metaNoindex = metaInfo.meta.metaRobot.includes("noindex");
  const metaNofollow = metaInfo.meta.metaRobot.includes("nofollow");

  // -------------------- canonical --------------------------
  const canonical = metaInfo.meta.Canonical;
  const hasCanonical = canonical.length > 0;

  // -------------------- social metadata --------------------------
  const hasOpenGraph = !!metaInfo.meta.openGraph;
  const hasTwitterCard = !!metaInfo.twitterCard;

  // -------------------- viewport --------------------------
  const hasViewport = !!metaInfo.meta.metaViewport;
  const mobileFriendlyViewport = metaInfo.meta.metaViewport.isMobileReady;

  // -------------------- language --------------------------
  const hreflangCount = metaInfo.hreflang.length;
  const hasHreflang = hreflangCount > 0;

  // -------------------- branding --------------------------
  const hasSiteName = !!metaInfo.sitename;
  const hasFavicon = metaInfo.favicon.length > 0;

  // -------------------- resource hints --------------------------
  const resourceHintCount = metaInfo.resourceHints.length;

  return {
    // Title
    title: title,
    hasTitle: hasTitle,
    hasMultipleTitles: hasMultipleTitles,
    duplicateTitle: duplicateTitle,

    // Meta Description
    metaDescription,
    hasMetaDescription,
    duplicateMetaDescription,
    // Robots
    hasMetaRobots,
    metaNoindex,
    metaNofollow,

    // Canonical
    hasCanonical,
    canonical,

    // Social Metadata
    hasOpenGraph,
    hasTwitterCard,

    // Viewport
    hasViewport,
    mobileFriendlyViewport,
    // Language
    hreflangCount,
    hasHreflang,

    // Branding
    hasSiteName,
    hasFavicon,

    // Resource Hints
    resourceHintCount,
  };
}
