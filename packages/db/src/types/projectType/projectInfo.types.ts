import { DomainInformationType } from "@repo/contracts/types/crawl/domain-leve-information/domainInformation.Types";
import { WebsiteInformationType } from "@repo/contracts/types/crawl/domain-leve-information/websiteInformation.Types";

import { Types } from "mongoose";

export interface ProjectInfoSchemaType {
  projectId: Types.ObjectId;
  domainInfo: DomainInformationType;
  websiteInfo: WebsiteInformationType;
}
