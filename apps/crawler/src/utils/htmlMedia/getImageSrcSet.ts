import * as cheerio from "cheerio";
import { Element } from "domhandler";

export function getImageSrcSet(img: cheerio.Cheerio<Element>, baseUrl: URL): string[] {
  return (
    img
      .attr("srcset")
      ?.split(",")
      .map((entry) => {
        const [src] = entry.trim().split(/\s+/);
        return src;
      })
      .filter((src): src is string => src !== undefined) ?? []
  );
}
