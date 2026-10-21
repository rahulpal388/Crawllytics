export type HTMLContentAnalysisType = {
	wordCount: number;
	characterCount: number;
	paragraphCount: number;
	sentenceCount: number;

	averageWordsPerSentence: number;
	averageWordLength: number;
	readingTimeMinutes: number;

	mainContentWordCount: number;
	textHtmlRatio: number;

	repeatedParagraphCount: number;
	contentRepetitionRatio: number;

	contentHash: string;
	language: string | null;
};
