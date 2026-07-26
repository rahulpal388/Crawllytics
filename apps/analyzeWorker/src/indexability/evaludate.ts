import { indexabilityData } from "@/indexability/indexabilityData.js";
import { indexabilityIssuesRules } from "@/indexability/issuesRules.js";
import { indexabilityRecommendations } from "@/indexability/recommendations.js";
import { EvaluateType, FindingsType } from "@repo/config/types/analysesTypes/evaluteTypes";
import { GatherInfoType } from "@/types/gatherInfoType.js";




export function evaluateIndexability(info: GatherInfoType): EvaluateType {
    const indexabilityAnalysis = indexabilityData(info);

    let score = 100;
    const category = "indexability";
    const findings: FindingsType[] = [];

    for (const issue of indexabilityIssuesRules) {
        if (issue.check(indexabilityAnalysis)) {
            score -= issue.scoreImpact;
            const recommendations = indexabilityRecommendations[issue.code];
            findings.push({
                issues: {
                    code: issue.code,
                    title: issue.title,
                    severity: issue.severity
                },
                recommendations
            })
        }
    }


    return {
        score,
        category,
        findings
    }
}