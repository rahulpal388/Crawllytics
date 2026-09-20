import { EvaluateType } from "../../../contracts/src/types/analysesTypes/evaluteTypes.js";

export type PageAnalysisType = {
  Crawlability: EvaluateType[];
  Indexability: EvaluateType[];
  Metadata: EvaluateType[];
  URL: EvaluateType[];
  Content: EvaluateType[];
  Heading: EvaluateType[];
  Images: EvaluateType[];
  Links: EvaluateType[];
  StructuredData: EvaluateType[];
  Performance: EvaluateType[];
  Security: EvaluateType[];
  Mobile: EvaluateType[];
  Accessibility: EvaluateType[];
  Social: EvaluateType[];
  HTMLQuality: EvaluateType[];
};
