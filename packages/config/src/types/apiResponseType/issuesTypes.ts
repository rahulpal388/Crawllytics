

export type SeverityType = "all" | "critical" | "high" | "medium" | "low";


export type CategoryType =
    "all" | "performance" | "accessibility" | "best-practices" | "seo" | "metadata" | "security" | "content" | "links" | "crawlability" | "structured-data" | "other";

export type StatusType = "all" | "open" | "closed" | "in-progress";

export type ImpactType = "all" | "high" | "medium" | "low";


// #####################################
//  issues table data type
// #####################################


export type IssuesTableDataType = {
    id: string | number;
    issues: {
        title: string;
        description: string;
    };
    severity: Exclude<SeverityType, "all">;
    category: Exclude<CategoryType, "all">;
    affectedPages: number;
    impact: Exclude<ImpactType, "all">;
    status: Exclude<StatusType, "all">;
    actions: null;
};