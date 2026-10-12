
export type HTMLHeadingAnalysisType = {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    h4Count: number;
    h5Count: number;
    h6Count: number;

    missingH1: boolean;
    multipleH1: boolean;

    emptyHeadingCount: number;
    duplicateHeadingCount: number;
    hierarchyIssueCount: number;

    shortHeadingCount: number;
    longHeadingCount: number;

    headingTextRatio: number;
    headingIdCoverage: number;
    headingAnchorCoverage: number;

};
