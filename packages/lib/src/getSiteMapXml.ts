import { XMLParser } from "fast-xml-parser"
import { headerConfig } from "@repo/config/constant/fetchHeaderConfig";
import axios from "axios";
import { CrawlError } from "@/src/errorClass/crawlError";

type SiteMapXMLType = {
    loc: string;
    [key: string]: unknown;
}


type GetSiteMapXmlReturnType = {
    success: true;
    urls: string[];
} | {
    success: false;
    error: string;
    type:
    | "NETWORK"
    | "ACCESS_DENIED"
    | "PARSE"
    | "INVALID_SITEMAP";
}


export async function getSiteMapXml(sitemapUrl: string): Promise<GetSiteMapXmlReturnType> {

    try {

        const response = await axios.get(sitemapUrl, {
            headers: headerConfig
        });


        const xml = new XMLParser().parse(response.data);
        return {
            success: true,
            urls: xml.urlset.url.map(({ loc }: SiteMapXMLType) => loc)
        };

    } catch (err) {
        if (axios.isAxiosError(err)) {
            return {
                success: false,
                error: `Error fetching sitemap from ${sitemapUrl}: ${err.response?.status} - ${err.message}`,
                type: err.response?.status === 403 ? "ACCESS_DENIED" : "NETWORK"
            };
        } else {
            return {
                success: false,
                error: `Error fetching sitemap from ${sitemapUrl}: ${err instanceof Error ? err.message : String(err)}`,
                type: "PARSE"
            }
        }
    }


}


