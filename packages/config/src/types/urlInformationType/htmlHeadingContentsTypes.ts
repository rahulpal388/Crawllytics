


export type HTMLHeadingType = {
    text: string;
    charLength: number;
    wordCount: number;
}

export type HTMLHeadingContentsType = {

    h1: HTMLHeadingType[],
    h2: HTMLHeadingType[],
    h3H6: HTMLHeadingType[]
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