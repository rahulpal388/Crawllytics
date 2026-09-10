
/*
* CrawlStreamMessageType : type of message that will be sent to the crawl stream
*/
export type CrawlStreamMessageType = {
  projectId: string;
  storeId: string;
  type: "link"
  url: string;
  limit: {
    type: "pages" | "depth",
    currValue: number
  }
};


export type LinkInfoType = {
  limit: {
    type: "pages" | "depth";
    value: number;
    // current value is either depth or number of pages crawled, depending on the limit type
    currentValue: number;
  },
  totalUrl: number;
  crawledUrl: number;
} | null;


export type UserAgentType = {
  userAgent: string[];
  allow: string[];
  disallow: string[];
};


/*
* CrawlInfoStoreType : type of data that will be stored in the redis hash store for each crawl project
*/

export type CrawlInfoStoreType = {
  projectId: string;
  status: "in-progress" | "completed" | "analyzing" | "failed";
  linkInfo: LinkInfoType;
  userAgentInfo: UserAgentType[];
}