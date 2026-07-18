import { UserAgentType } from "@repo/config/types/robotsTxtType";
import { USER_AGENT } from "@/fetchWebPageAndNetworkInfo.js";

export function isUrlCrawlAllowed(url: string, robotsTxt: UserAgentType[]): boolean {
  if (robotsTxt.length === 0) {
    return true;
  }

  const pathname = new URL(url).pathname;

  const matchingGroups = robotsTxt.filter(
    (group) =>
      group.userAgent.includes("*") ||
      group.userAgent.some((ua) => ua.toLowerCase() === USER_AGENT.toLowerCase()),
  );

  if (matchingGroups.length === 0) {
    return true;
  }

  let longestMatch = "";
  let longestMatchType: "allow" | "disallow" | null = null;

  for (const group of matchingGroups) {
    for (const allowRule of group.allow) {
      if (allowRule && pathname.startsWith(allowRule) && allowRule.length > longestMatch.length) {
        longestMatch = allowRule;
        longestMatchType = "allow";
      }
    }

    for (const disallowRule of group.disallow) {
      if (
        disallowRule &&
        pathname.startsWith(disallowRule) &&
        disallowRule.length > longestMatch.length
      ) {
        longestMatch = disallowRule;
        longestMatchType = "disallow";
      }
    }
  }

  return longestMatchType !== "disallow";
}
