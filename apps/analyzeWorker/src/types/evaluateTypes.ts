import { RecommendationType } from "@/types/recommendationTypes.js";
import { RuleCategory, RuleMetadata, RulesType } from "@/types/rulesType.js";

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

