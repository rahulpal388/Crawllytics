


export type HTMLHeadingContentType = {
    text: string;
    charLength: number;
    wordCount: number;
}

export type HTMLHeadingContentsType = {

    h1: HTMLHeadingContentType[],
    h2: HTMLHeadingContentType[],
    h3H6: HTMLHeadingContentType[]
    count: {
        wordCount: number;
        paragraphCount: number;
        sentenceCount: number;
        avgSentenceLength: number;
    }
    // fleschReadingEase: number;
    // fleschKincaidGrade: number;
    // detectedLanguage: string | null;
    // topKeywords: KeywordFrequencyType[];
    // topBigrams: KeywordFrequencyType[]
    // topTrigrams: KeywordFrequencyType[]
    // tfidfTopTerms: KeywordFrequencyType[]
    // isThinContent: boolean;
    // hasTableOfContents: boolean;
    // contentHash: string;
}


export type KeywordFrequencyType = {
    word: string;
    count: number;
    density: number;
}