

// ########################################
//   KPI Scores Response Type
// ########################################
type KPIType = {
    currentValue: number;
    previousValue: number;
    changePercentage: number;
    changeDirection: "up" | "down" | "no-change";

    comparisonLabel: string;

    badge?: {
        label: string;
        variant: "success" | "warning" | "error" | "info";
    };
};

export interface DashboardKPIsResponse {
    seoScore: KPIType;
    pagesCrawled: KPIType;
    totalIssues: KPIType;
    organicClicks: KPIType;
    totalUsers: KPIType;
}