

export type PageContentAnalysis = {
    wordCount: number;

    textHtmlRatio: number;

    readingTimeMinutes: number;

    paragraphCount: number;

    contentHash: string;

    duplicateContent: boolean;

    thinContent: boolean;
}