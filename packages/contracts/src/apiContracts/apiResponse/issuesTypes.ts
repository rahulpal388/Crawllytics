import { CategoryType, SeverityType } from "../../types/analysesTypes/DynamicRule.Type.js";
import { HowToFixType } from "../../types/analysesTypes/SEORules.Type.js";

export type StatusType = "all" | "open" | "closed" | "in-progress";

export type ImpactType = "all" | "high" | "medium" | "low";



// #####################################
//  issues table data type
// #####################################

export type IssuesResponseType = {
  id: string;
  issues: {
    title: string;
    description: string;
  };
  severity: Exclude<SeverityType, "all">;
  category: Exclude<CategoryType, "all">;
  affectedPages: number;
  impact: Exclude<ImpactType, "all">;
  status: Exclude<StatusType, "all">;
  actions: null;
};

// #####################################
//  issues info type
// #####################################





export type AffectedPagesType = {
  count: number;
  pages: {
    pageId: string;
    url: string;
    title: string;
  }[];
};

//   API return type of issues detail
export type IssuesInfoResponseType = {
  id: string;
  title: string;
  severity: Exclude<SeverityType, "all">;
  category: Exclude<CategoryType, "all">;
  description: string;
  whyItMatters: string;
  recommended: {
    description: string;
    steps: string[];
  };
  howToFix: HowToFixType;

  affectedPages: AffectedPagesType;
  detected: Date;
  crawlCount: number;
};
