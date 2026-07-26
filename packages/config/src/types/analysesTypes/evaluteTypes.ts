import { RecommendationType } from "./recommendationTypes.js";
import { RuleCategory, RuleMetadata } from "./rulesType.js";

export type IssueType<TCode extends string = string> =
    RuleMetadata<TCode>;

export type FindingsType = {
    issues: IssueType;
    recommendations: RecommendationType;
}

export type EvaluateType = {
    score: number;
    category: RuleCategory;
    findings: FindingsType[];
}

