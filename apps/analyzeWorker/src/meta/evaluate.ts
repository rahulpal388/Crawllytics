import { metaIssuesRules } from "@/meta/issuesRules.js";
import { metaData } from "@/meta/metaData.js";
import { metaRecommendations } from "@/meta/recommendations.js";
import { GatherInfoType } from "@/types/gatherInfoType.js";
import { EvaluateType, FindingsType } from "@repo/config/types/analysesTypes/evaluteTypes";


export function evaluateMetaData(metaInfo: GatherInfoType["htmlHeader"]): EvaluateType {

    const metaAnalysis = metaData(metaInfo);

    let score = 100;
    const category = "metadata";
    const findings: FindingsType[] = [];


    for (const issues of metaIssuesRules) {

        if (issues.check(metaAnalysis)) {
            score -= issues.scoreImpact;
            const recommendations = metaRecommendations[issues.code];

            findings.push({
                issues: {
                    code: issues.code,
                    title: issues.title,
                    severity: issues.severity
                },
                recommendations: recommendations
            })
        }

    }


    return {
        score,
        category,
        findings
    }


}