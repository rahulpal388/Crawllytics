export type PageMetaAnalysis = {
  title: TitleAnalysis;
  metaDescription: MetaDescriptionAnalysis;
  metaRobots: MetaRobotsAnalysis;
  canonical: CanonicalAnalysis;
  openGraph: OpenGraphAnalysis;
  twitterCard: TwitterCardAnalysis;
  viewport: ViewportAnalysis;
  hreflang: HreflangAnalysis;
  alternate: AlternateAnalysis;
  branding: BrandingAnalysis;
  resourceHints: ResourceHintsAnalysis;
  manifest: ManifestAnalysis;
};

// ---------------------
// Title
// ---------------------

export type TitleAnalysis = {
  hasTitle: boolean;
  titleCount: number;
  hasMultipleTitles: boolean;
  emptyTitle: boolean;
  duplicateTitle: boolean;

  titleLengthChar: number | null;
  titleLengthPixel: number | null;

  titleTooShort: boolean;
  titleTooLong: boolean;
  titleTooWide: boolean;
};

// ---------------------
// Meta Description
// ---------------------

export type MetaDescriptionAnalysis = {
  hasMetaDescription: boolean;
  metaDescriptionCount: number;
  hasMultipleMetaDescriptions: boolean;
  emptyMetaDescription: boolean;
  duplicateMetaDescription: boolean;

  metaDescriptionLengthChar: number | null;
  metaDescriptionLengthPixel: number | null;

  metaDescriptionTooShort: boolean;
  metaDescriptionTooLong: boolean;
  metaDescriptionTooWide: boolean;
};

// ---------------------
// Meta Robots
// ---------------------

export type MetaRobotsAnalysis = {
  hasMetaRobots: boolean;
  robotsMetaCount: number;
  hasMultipleMetaRobots: boolean;

  metaIndex: boolean;
  metaNoindex: boolean;
  metaFollow: boolean;
  metaNofollow: boolean;
  metaNoarchive: boolean;
  metaNosnippet: boolean;
  metaNoimageindex: boolean;
  metaIndexIfEmbedded: boolean;

  hasMaxSnippet: boolean;
  hasMaxImagePreview: boolean;
  hasMaxVideoPreview: boolean;
  hasUnavailableAfter: boolean;

  conflictingRobotsDirectives: boolean;
};

// ---------------------
// Canonical
// ---------------------

export type CanonicalAnalysis = {
  hasCanonical: boolean;
  canonicalCount: number;
  hasMultipleCanonicals: boolean;

  hasSelfCanonical: boolean;
  hasCrossPageCanonical: boolean;
  hasCrossDomainCanonical: boolean;

  hasAbsoluteCanonical: boolean;
  hasRelativeCanonical: boolean;

  hasHttpsCanonical: boolean;
  hasInvalidCanonical: boolean;
};

// ---------------------
// Open Graph
// ---------------------

export type OpenGraphAnalysis = {
  hasOpenGraph: boolean;

  hasOgTitle: boolean;
  hasOgDescription: boolean;
  hasOgImage: boolean;
  hasOgAudio: boolean;
  hasOgVideo: boolean;
  hasOgUrl: boolean;
  hasOgType: boolean;
  hasOgSiteName: boolean;
  hasOgLocale: boolean;
};

// ---------------------
// Twitter Card
// ---------------------

export type TwitterCardAnalysis = {
  hasTwitterCard: boolean;

  hasTwitterCardType: boolean;
  hasTwitterTitle: boolean;
  hasTwitterDescription: boolean;
  hasTwitterImage: boolean;
  hasTwitterSite: boolean;
  hasTwitterCreator: boolean;
  hasTwitterPlayer: boolean;
};

// ---------------------
// Viewport
// ---------------------

export type ViewportAnalysis = {
  hasViewport: boolean;
  viewportCount: number;
  hasMultipleViewports: boolean;

  hasViewportWidth: boolean;
  hasInitialScale: boolean;

  hasMinimumScale: boolean;
  hasMaximumScale: boolean;

  hasUserScalable: boolean;

  hasViewportFit: boolean;
  hasInteractiveWidget: boolean;
};

// ---------------------
// Hreflang
// ---------------------

export type HreflangAnalysis = {
  hasHreflang: boolean;
  hreflangCount: number;

  hasDefaultHreflang: boolean;
  hasReturnHreflang: boolean;

  hasValidLanguageCodes: boolean;
  hasInvalidLanguageCodes: boolean;

  hasAbsoluteHreflangUrls: boolean;
  hasRelativeHreflangUrls: boolean;

  hasBrokenHreflangUrls: boolean;
};

// ---------------------
// Alternate
// ---------------------

export type AlternateAnalysis = {
  hasAlternate: boolean;
  alternateCount: number;
};

// ---------------------
// Branding
// ---------------------

export type BrandingAnalysis = {
  hasSiteName: boolean;

  hasFavicon: boolean;
  faviconCount: number;
};

// ---------------------
// Resource Hints
// ---------------------

export type ResourceHintsAnalysis = {
  hasResourceHints: boolean;
  resourceHintCount: number;

  hasPreconnect: boolean;
  hasDnsPrefetch: boolean;
  hasPreload: boolean;
  hasPrefetch: boolean;
  hasModulePreload: boolean;
  hasPrerender: boolean;
};

// ---------------------
// Manifest
// ---------------------

export type ManifestAnalysis = {
  hasManifest: boolean;
};