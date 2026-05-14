import { CrawlWebsiteDataType } from "./types.js";


export const STREAMS = {
    CRAWL: "crawl:url",
} as const;

export type StreamsKeyTypes = typeof STREAMS[keyof typeof STREAMS];

export type StreamMessageMap = {
    "crawl:url": CrawlWebsiteDataType
}