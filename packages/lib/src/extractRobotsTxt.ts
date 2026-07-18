import { UserAgentType, RobotsTxtType } from "@repo/config/types/robotsTxtType";

export async function getRobotsTxt(origin: string): Promise<string | null> {
  try {
    const robotsTxtUrl = new URL("/robots.txt", origin).href;
    const response = await fetch(robotsTxtUrl);
    return response.ok ? await response.text() : null;
  } catch {
    return null;
  }
}

export async function extractRobotsTxt(origin: string): Promise<RobotsTxtType | null> {
  const robotsTxtContent = await getRobotsTxt(origin);
  if (!robotsTxtContent) {
    return null;
  }

  const lines = robotsTxtContent.split("\n").map((line) => line.trim());

  const groups: UserAgentType[] = [];
  const siteMapXMLUrls: string[] = [];
  let hasRules = false;

  for (const line of lines) {
    if (!line || line.startsWith("#")) {
      continue;
    }
    const [directive = "", ...rest] = line.split(":");

    const value = rest.join(":").trim();

    switch (directive.toLowerCase()) {
      case "user-agent": {
        if (groups.length === 0 || hasRules) {
          groups.push({
            userAgent: [value],
            allow: [],
            disallow: [],
          });
          hasRules = false;
        } else {
          groups[groups.length - 1]?.userAgent.push(value);
        }
        break;
      }
      case "allow": {
        groups[groups.length - 1]?.allow.push(value);
        hasRules = true;
        break;
      }
      case "disallow": {
        groups[groups.length - 1]?.disallow.push(value);
        hasRules = true;
        break;
      }
      case "sitemap": {
        siteMapXMLUrls.push(value);
        break;
      }
    }
  }

  return {
    userAgents: groups,
    siteMapXMLUrls,
  };
}
