import { UrlCrawledType } from "@repo/db/types/urlCrawledTypes";

export type GatherInfoType = Omit<UrlCrawledType, "analyzedUrlData">;
