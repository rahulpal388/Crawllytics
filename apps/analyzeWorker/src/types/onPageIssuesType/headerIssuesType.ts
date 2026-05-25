

export type SeverityType = "low" | "medium" | "high";


export type HeaderIssuesType = {
    title: {
        isMissing: boolean;
        isTooShort: boolean;
        isDuplicate: boolean;
        issueMessage: string;
        severity: SeverityType;
    },
    meta: {
        metaDescription: {
            isMissing: boolean;
            isTooShort: boolean;
            issueMessage: string;
            severity: SeverityType;
        },
        canonical: {
            isMissing: boolean;
            issueMessage: string;
            severity: SeverityType;
        },
        robot: {
            isMissing: boolean;
            issueMessage: string;
            severity: SeverityType;
        },
        viewport: {
            isMissing: boolean;
            issueMessage: string;
            severity: SeverityType;
        }
    }
}