


export type SeverityType = "all" | "high" | "medium" | "low" | "warning";

export type CategoryType =
    | "all"
    | "performance"
    | "accessibility"
    | "metadata"
    | "security"
    | "content"
    | "links"
    | "crawlability"
    | "indexability"



export type DynamicRuleType<K extends string, T> = {
    ruleId: K;
    name: string;
    description: string;
    severity: Exclude<SeverityType, "all">;
    category: Exclude<CategoryType, "all">;
    analyze: (data: T) => boolean;
}