import { SEOIssues } from "@/types/seoIssuesTypes.js"
import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes"
import { URL_RULES } from "@/analysisRules/urlRules.js"

export function urlAnalyse(urlInfomation: UrlAnalysesType): SEOIssues[] {
    const issues: SEOIssues[] = [];

    for (const rule of URL_RULES) {
        if (rule.check(urlInfomation)) {
            issues.push({
                name: rule.name,
                severity: rule.severity,
                message: rule.message
            })
        }
    }

    return issues;
}