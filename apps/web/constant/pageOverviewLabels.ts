import {
  CrawlingAndIndexingType,
  HTTPHeaderType,
  URLInfoType,
} from "@repo/contract/types/apiResponseType/pages.responseType";

export const pageOverviewURLInfoLabels: Record<keyof URLInfoType, string> = {
  url: "URL",
  status: "Status",
  contentType: "Content-Type",
  pageScore: "Page Score",
  pageSize: "Page Size",
  canonicalUrl: "Canonical URL",
  httpVersion: "HTTP Version",
  responseTime: "Response Time",
  compression: "Compression",
  server: "Server",
  lastModified: "Last Modified",
  redirect: "Redirect",
};

export const pageOverviewHTTPHeaderLabels: Record<
  keyof HTTPHeaderType,
  string
> = {
  server: "Server",
  date: "Date",
  contentType: "Content-Type",
  transferEncoding: "Transfer-Encoding",
  contentEncoding: "Content-Encoding",
  connection: "Connection",
  cacheControl: "Cache-Control",
  etag: "ETag",
  lastModified: "Last-Modified",
  vary: "Vary",
  strictTransportSecurity: "Strict-Transport-Security",
  contentSecurityPolicy: "Content-Security-Policy",
  xContentTypeOptions: "X-Content-Type-Options",
  xFrameOptions: "X-Frame-Options",
  referrerPolicy: "Referrer-Policy",
};

export const pageOverviewCrawlingAndIndexingLabels: Record<
  keyof CrawlingAndIndexingType,
  string
> = {
  robotsTxt: "Robots.txt",
  robotsRuleMatched: "Robots Rule Matched",
  crawlDepth: "Crawl Depth",
  redirectChainLength: "Redirect-Chain-Length",
  redirectLoop: "Redirect Loop",
  sitemap: "Sitemap",
  discoveredVia: "Discovered Via",
  orphanPage: "Orphan Page",
  indexability: "Indexability",
  metaRobots: "Meta Robots",
  xRobotsTag: "X-Robots-Tag",
  canonicalUrl: "Canonical URL",
  canonicalStatusCode: "Canonical Status Code",
  canonicalConflict: "Canonical Conflict",
};
