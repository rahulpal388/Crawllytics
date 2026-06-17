import { AnalyzeStreamMessageType } from "@/types/analyzeStreamMessageTypes.js";
import { CrawlStreamMessageType } from "@/types/crawlStreamMessageType.js";


export const STREAMS = {
    CRAWL_STREAM: "crawl_stream",
    ANALYZE_STREAM: "analyze_stream",
} as const;


export const STREAM_GROUPS = {
    CRAWL_STREAM_GROUP: "crawl_stream_group",
    ANALYZE_STREAM_GROUP: "analyze_stream_group"
} as const;


export type StreamKeys = typeof STREAMS[keyof typeof STREAMS];
export type StreamGroupKeys = typeof STREAM_GROUPS[keyof typeof STREAM_GROUPS];


export interface StreamMessageMap extends Record<StreamKeys, unknown> {
    [STREAMS.CRAWL_STREAM]: CrawlStreamMessageType;
    [STREAMS.ANALYZE_STREAM]: AnalyzeStreamMessageType;
}
