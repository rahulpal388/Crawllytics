export type PageContentAnalysis = {
    wordCount: number;
    characterCount: number;
    paragraphCount: number;
    sentenceCount: number;

    readingTimeMinutes: number;
    averageWordsPerSentence: number;
    averageWordsPerParagraph: number;

    textHtmlRatio: number;

    thinContent: boolean;
    duplicateContent: boolean;

    hasMainContent: boolean;
    hasLargeTextBlocks: boolean;
    hasBoilerplateDominance: boolean;

    longestParagraphWords: number;
    shortestParagraphWords: number;

    readabilityScore?: number;
}