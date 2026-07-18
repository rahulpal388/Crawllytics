export type PageMetaAnalysis = {
  // Title
  title: {
    text: string;
    lengthChar: number;
    lengthPixel: number;
  }[];
  hasTitle: boolean;
  hasMultipleTitles: boolean;
  duplicateTitle: boolean;

  // Meta Description
  metaDescription: {
    text: string;
    lengthChar: number;
    lengthPixel: number;
  }[];
  hasMetaDescription: boolean;
  duplicateMetaDescription: boolean;

  // Robots
  hasMetaRobots: boolean;
  metaNoindex: boolean;
  metaNofollow: boolean;

  // Canonical
  canonical: {
    url: string;
    isSelf: boolean;
    isCrossPage: boolean;
    isCrossDomain: boolean;
    isAbsoluteUrl: boolean;
  }[];
  hasCanonical: boolean;

  // Social Metadata
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;

  // Viewport
  hasViewport: boolean;
  mobileFriendlyViewport: boolean;

  // Language
  hreflangCount: number;
  hasHreflang: boolean;

  // Branding
  hasSiteName: boolean;
  hasFavicon: boolean;

  // Resource Hints
  resourceHintCount: number;
};
