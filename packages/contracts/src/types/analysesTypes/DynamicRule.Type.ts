


export type SeverityType = "all" | "critical" | "warning" | "medium" | "notice";

export type CategoryType =
    | "all"
    | "performance"
    | "accessibility"
    | "metadata"
    | "security"
    | "content"
    | "links"
    | "crawlability"



export type DynamicRuleType<K extends string> = {
    ruleId: K;
    name: string;
    description: string;
    severity: Exclude<SeverityType, "all">;
    category: Exclude<CategoryType, "all">;
}