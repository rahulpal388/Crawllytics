import mongoose from "mongoose";
import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";
import { WebsiteInformationType } from "@repo/contracts/types/crawl/domain-leve-information/websiteInformation.Types";

export type ProjectSchemaType = {
  userId: mongoose.Types.ObjectId;
  projectName: string;
  domain: string;
  domainInfo: DomainInformationType | null;
  websiteInfo: WebsiteInformationType | null;
  lastCrawledAt: Date | null;
  nextCrawlAt: Date | null;
  createdAt: Date;
};
