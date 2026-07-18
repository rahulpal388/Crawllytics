export type UserAgentType = {
  userAgent: string[];
  allow: string[];
  disallow: string[];
};

export type RobotsTxtType = {
  userAgents: UserAgentType[];
  siteMapXMLUrls: string[];
};
