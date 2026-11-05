import { UrlCrawledSchemaType } from "@repo/db/types/crawlTypes/urlCrawledTypes";

export type GatherInfoType = Omit<UrlCrawledSchemaType, "analyzedUrlData">;
