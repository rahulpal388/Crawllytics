export type PageIndexabilityType = {
  statusCode: number;
  metaRobots: string[];
  xRobotsTag: string[];
  canonicalUrl: string[];
  redirectTarget: string | null;
  isInSitemap: boolean;
};
