

export type RuleSeverity = "critical" | "high" | "warning" | "low" | "info";

export const RULE_CATEGORY = {
    METADATA: "metadata",
    CONTENT: "content",
    PERFORMANCE: "performance",
    CRAWLABILITY: "crawlability",
    SECURITY: "security",
    IMAGES: "images",
    INTERNAL_LINKS: "internalLinks",
    STRUCTURED_DATA: "structuredData",
} as const;

export type RuleCategory = typeof RULE_CATEGORY[keyof typeof RULE_CATEGORY];


export type RuleMetadata<TCode extends string = string> = {
    code: TCode;
    title: string;
    scoreImpact: number;
    category: RuleCategory;
    severity: RuleSeverity;
};

export type RulesType<T, TCode extends string = string> =
    RuleMetadata<TCode> & {
        check: (data: T) => boolean;
    };

