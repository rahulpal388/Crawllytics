


export type HTMLHeadingType = {
    text: string;
    charLength: number;
    wordCount: number;
}

export type HTMLHeadingContentsType = {
    h1: HTMLHeadingType[];
    h2: HTMLHeadingType[];
    h3H6: HTMLHeadingType[];

    count: {
        headingCount: number;

        wordCount: number;
        characterCount: number;

        paragraphCount: number;
        sentenceCount: number;

        averageWordsPerSentence: number;
        averageWordsPerParagraph: number;
    };

    structure: {
        firstHeadingLevel: 1 | 2 | 3 | 4 | 5 | 6 | null;
        longestParagraphWords: number;
        shortestParagraphWords: number;
        skippedHeadingLevels: boolean;

        duplicateHeadings: number;

        emptyHeadings: number;

        headingsWithoutContent: number;

        headingWordCount: number;

        headingToContentRatio: number;
    };
}