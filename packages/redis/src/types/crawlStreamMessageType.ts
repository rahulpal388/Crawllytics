import { UserAgentType } from "@repo/contracts/types/userAgent.types";

/*
 * CrawlStreamMessageType : type of message that will be sent to the crawl stream
 */
export type CrawlStreamMessageType = {
  projectId: string;
  storeId: string;
  type: "domain";
  url: string;
  limit: {
    type: "pages" | "depth";
    currValue: number;
  };
};

export type LinkInfoType = {
  limit: {
    type: "pages" | "depth";
    value: number;
  };
  totalUrl: number;
  crawledUrl: number;
};


/*
 * CrawlInfoStoreType : type of data that will be stored in the redis hash store for each crawl project
 */

export type CrawlInfoStoreStatusType = "in-progress" | "completed" | "analyzing" | "failed";

export type CrawlInfoStoreType = {
  projectId: string;
  isGatheredDomainInfo: boolean;
  status: CrawlInfoStoreStatusType;
  linkInfo: LinkInfoType;
  userAgentInfo: UserAgentType[];
};
