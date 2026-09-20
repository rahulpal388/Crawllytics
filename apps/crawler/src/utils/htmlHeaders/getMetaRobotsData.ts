import * as cheerio from "cheerio";
import { RobotDirective } from "@repo/contract/types/urlInformationType/htmlHeaderResponseTypes";

export function getMetaRobotsData($: cheerio.CheerioAPI): string[] {
  const metaRobots = new Set<RobotDirective>();

  $("meta[name='robots']").each((_, el) => {
    const content = $(el).attr("content");

    if (!content) return;

    content
      .split(",")
      .map((directive) => directive.trim().toLowerCase())
      .forEach((directive) => metaRobots.add(directive));
  });

  return Array.from(metaRobots);
}
