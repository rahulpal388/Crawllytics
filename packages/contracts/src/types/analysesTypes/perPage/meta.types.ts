import { HTMLHeaderType } from "../../crawl/urlCrawl/htmlInfo/htmlHeaderResponseTypes.js";



export type MetaAnalysisType = Pick<HTMLHeaderType, "meta"> & {
    xRobotsTag: string[];
}