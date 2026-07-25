export type PageCrawlabilityAnalysis = {
  url: {
    url: string;
    protocol: string;
    hostname: string;
    pathname: string;
  };
  httpResponse: {
    statusCode: number;
    method: string;
    redirectChain: string[];
    redirectCount: number;
    isRedirectLoop: boolean;
    // responseHeaders: Record<string, string>;
  };
  robotTxt: {
    allowed: boolean;
    matchedRule: boolean;
    // crawlDelay: boolean;
    matchedUserAgent: boolean;
  };
  internalLink: {
    totalIncomingLinks: number;
    totalOutgoingLinks: number;
  };
  network: {
    dnsLookupTime: number;
    tcpConnectTime: number;
    tlsHandshakeTime: number;
    timeToFirstByte: number;
    totalResponseTime: number;
  }
  metaRobots: string[];
  xRobotTag: string[];
  canonicalUrl: string[];
  isInSiteMap: boolean

};
