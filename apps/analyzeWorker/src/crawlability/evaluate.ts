import { crawlabilityData } from "@/crawlability/crawlabilityData.js";
import { crawlabilityIssuesRules } from "@/crawlability/issuesrules.js";
import { EvaluateType, FindingsType, IssueType } from "@/types/evaluateTypes.js";
import { GatherInfoType } from "@/types/gatherInfoType.js";
import { RecommendationType } from "@/types/recommendationTypes.js";
import { crawlabilityRecommendations } from "@/crawlability/recommendations.js";


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
                    scoreImpact: issue.scoreImpact,
                    category: issue.category,
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