import { getSiteMapXml } from "@repo/lib/getSiteMapXml";
import { logger } from "@repo/lib/logger";

export async function getSiteMapUrls(siteMapUrl: string): Promise<string[]> {
  const res = await getSiteMapXml(siteMapUrl);
  if (!res.success) {
    logger.info({
      message: "Failed to fetch sitemap XML",
      path: "",
      metaData: {
        error: res.error,
        type: res.type,
      },
    });
    return [];
  }

  return res.urls;
}
