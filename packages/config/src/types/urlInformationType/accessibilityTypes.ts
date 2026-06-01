
export type AccessibilityType = {
    formsWithoutLabels: number;
    buttonsWithoutText: number;
    hasSkipNavigation: boolean;
    ariaLandmarks: string[];
    hasAriaHidden: boolean;
    langDeclared: boolean;
    langMatchesContent: boolean;
    tabIndexAbuse: boolean;
    linksOpenNewTabWithoutWarning: number;
    tablesMissingHeaders: number;
}