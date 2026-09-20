export type HTMLHeaderType = {
  title: HTMLTitleType[];
  meta: {
    metaDescription: HTMLMetaDescriptionType[];
    metaRobot: string[]; // store the directives as strings, e.g., "index", "noindex", "follow", "nofollow", etc.
    Canonical: HTMLCanonicalType[];
    openGraph: HTMLOpenGraphType;
    metaViewport: HTMLMetaViewportType[];
  };
  hreflang: HreflangType[];
  twitterCard: TwitterCardType;
  favicon: FaviconType[];
  resourceHints: ResourceHintType[];
  sitename: string | null;
  alternate: HTMLAlternateType[];
  manifest: string | null;
};

export type HTMLTitleType = {
  text: string;
  lengthChar: number;
  lengthPixel: number; // <- google truncates at ~600px;
};

export type HTMLMetaDescriptionType = {
  text: string;
  lengthChar: number;
  lengthPixel: number; // <- google truncates at ~960px;
};

export type RobotDirective =
  | "index"
  | "noindex"
  | "follow"
  | "nofollow"
  | "noarchive"
  | "nosnippet"
  | "noimageindex"
  | "indexifembedded"
  | "max-snippet"
  | "max-image-preview"
  | "max-video-preview"
  | "unavailable_after"
  | string;

export type HTMLCanonicalType = {
  url: string;
  isSelf: boolean;
  isCrossPage: boolean;
  isCrossDomain: boolean;
  isAbsoluteUrl: boolean;
  isRelativeUrl: boolean;
  isHttps: boolean;
  isValidUrl: boolean;
};

export type HTMLOpenGraphType = {
  title: string | null;
  description: string | null;
  image: string[];
  audio: string[];
  video: string[];
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  imageType: string | null;
  url: string | null;
  type: string | null;
  siteName: string | null;
  locale: string | null;
};

export type HTMLMetaViewportType = {
  value: string;
  width: string | null;
  initialScale: number | null;
  minimumScale: number | null;
  maximumScale: number | null;
  userScalable: boolean | null;
  viewportFit: "auto" | "contain" | "cover" | null;
  interactiveWidget: string | null;
};

export type HreflangType = {
  hreflang: string; // Original value (en-US, fr, x-default)
  language: string | null; // en
  region: string | null; // US
  href: string;
  hrefStatusCode: number | null;
  isReturn: boolean;
  isDefault: boolean;
  isValidLanguage: boolean;
  isAbsoluteUrl: boolean;
};

export type TwitterCardType = {
  card: string; // "summary", "summary_large_image", "app", "player"
  title: string;
  description: string;
  image: string;
  site: string; // twitter handle of the site
  creator: string; // twitter handle of the content creator
  imageAlt: string | null;
  player: {
    playerUrl: string;
    width: number;
    height: number;
    streamUrl: string | null;
    streamContentType: string | null;
  };
};

export type FaviconType = {
  href: string;
  type: string | null; // "image/png", "image/x-icon"
  sizes: string | null; // "16x16", "32x32", "any"
  rel: string | null; // "icon", "shortcut icon", "apple-touch-icon"
};

export type ResourceHintRelType =
  "preconnect" | "dns-prefetch" | "preload" | "prefetch" | "modulepreload" | "prerender" | string;

export type ResourceHintType = {
  rel: ResourceHintRelType;
  href: string;
  as: string | null;
  type: string | null;
  media: string | null;
  crossOrigin: string | null;
  fetchPriority: "high" | "low" | "auto" | null;
  imageSrcSet: string | null;
  imageSizes: string | null;
  disabled: boolean;
};

export type HTMLAlternateType = {
  href: string;
  hreflang: string | null;
  type: string | null;
  media: string | null;
  title: string | null;
  as: string | null;
  crossOrigin: string | null;
};
