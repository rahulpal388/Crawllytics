import { crawlabilityData } from "@/crawlability/crawlabilityData.js";
import { GatherInfoType } from "@/types/gatherInfoType.js";
import { crawlabilityRecommendations } from "@/crawlability/recommendations.js";
import { crawlabilityIssuesRules } from "@/crawlability/issuesRules.js";
import { FindingsType, EvaluateType } from "@repo/config/types/analysesTypes/evaluteTypes";


export function evaluateCrawlabilityRules(info: GatherInfoType): EvaluateType {
    const crawlabilityAnalysis = crawlabilityData(info);

    let score = 100;
    const category = "crawlability";
    const findings: FindingsType[] = [];

    for (const issue of crawlabilityIssuesRules) {
        if (issue.check(crawlabilityAnalysis)) {
            const recommendation = crawlabilityRecommendations[issue.code];
            findings.push({
                issues: {
                    code: issue.code,
                    title: issue.title,
                    severity: issue.severity
                },
                recommendations: recommendation
            })
            score -= issue.scoreImpact;
        }
    }



    return {
        score,
        category,
        findings
    }

};