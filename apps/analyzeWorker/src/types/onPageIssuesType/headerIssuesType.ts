

export type SeverityType = "low" | "medium" | "high";


export type HeaderIssuesType = {
    title: {
        text: string[];
        isMissing: boolean;
        isTooShort: boolean;
        isDuplicate: boolean;
        issueMessage: string;
        severity: SeverityType;
    },
    meta: {
        metaDescription: {
            text: string[];
            isMissing: boolean;
            isTooShort: boolean;
            isDuplicate: boolean;
            issueMessage: string;
            severity: SeverityType;
        },
        canonical: {
            canonicalUrl: string;
            isMissing: boolean;
            isSelfReferencing: boolean;
            isCrossPage: boolean;
            isCrossDomain: boolean;
            issueMessage: string;
            severity: SeverityType;
        }[],
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