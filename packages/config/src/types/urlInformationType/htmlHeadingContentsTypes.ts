export type HTMLHeadingType = {
  text: string;
  charLength: number;
  wordCount: number;
};

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
};

/*
 export type HTMLHeadingType = {
    level: 1 | 2 | 3 | 4 | 5 | 6;

    text: string;

    characterCount: number;
    wordCount: number;

    id: string | null;

    position: number; // order in document

    hasAnchor: boolean;
}

export type HTMLHeadingDataType = {
    headings: HTMLHeadingType[];
}
 */

/*
export type HTMLParagraphType = {
    text: string;

    characterCount: number;
    wordCount: number;

    position: number;
}

export type HTMLSentenceType = {
    text: string;

    characterCount: number;
    wordCount: number;
}

export type HTMLContentDataType = {

    // Complete visible content
    visibleText: string;

    paragraphs: HTMLParagraphType[];

    sentences: HTMLSentenceType[];

    language: string | null;

    contentHash: string;

    counts: {

        characterCount: number;

        wordCount: number;

        sentenceCount: number;

        paragraphCount: number;

        headingCount: number;

        orderedListCount: number;

        unorderedListCount: number;

        listItemCount: number;

        tableCount: number;

        blockquoteCount: number;

        codeBlockCount: number;

        strongCount: number;

        emphasisCount: number;

        markCount: number;
    }
}

*/
