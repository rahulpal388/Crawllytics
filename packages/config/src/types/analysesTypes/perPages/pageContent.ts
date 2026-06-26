export type PageContentAnalysis = {
    // Basic
    wordCount: number;
    characterCount: number;
    paragraphCount: number;
    sentenceCount: number;

    // Reading
    readingTimeMinutes: number;
    averageWordsPerSentence: number;
    averageWordsPerParagraph: number;

    // HTML Content
    textHtmlRatio: number;
    // visibleTextLength: number;

    // Content Quality
    thinContent: boolean;
    duplicateContent: boolean;
    // contentHash: string;

    // Structure
    hasMainContent: boolean;
    hasLargeTextBlocks: boolean;
    hasBoilerplateDominance: boolean;

    // Text Distribution
    longestParagraphWords: number;
    shortestParagraphWords: number;

    // Optional NLP
    readabilityScore?: number;
}