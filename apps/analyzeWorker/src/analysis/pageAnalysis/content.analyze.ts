
import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageContentAnalysis } from "@repo/contracts/types/analysesTypes/perPages/pageContent";

export function content(gatherInfo: GatherInfoType): PageContentAnalysis {
  // --------------------- Counts ---------------------
  if (!gatherInfo.htmlHeadingContent?.content) {

    throw new Error("Content analysis data is missing in gatherInfo.");
  }
  const wordCount = 0;
  const characterCount = 0;
  const paragraphCount = 0;
  const sentenceCount = 0;


  // --------------------- Reading ---------------------

  const averageWordsPerSentence =
    sentenceCount === 0 ? 0 : Number((wordCount / sentenceCount).toFixed(2));

  const averageWordsPerParagraph =
    paragraphCount === 0 ? 0 : Number((wordCount / paragraphCount).toFixed(2));

  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // --------------------- HTML ---------------------

  const textHtmlRatio = 0

  // --------------------- Quality ---------------------

  const thinContent = wordCount < 300;

  // Will be determined after comparing every page
  const duplicateContent = false;

  // --------------------- Structure ---------------------


  const hasLargeTextBlocks = 12 > 200;

  const hasBoilerplateDominance = textHtmlRatio < 0.15;

  // --------------------- Distribution ---------------------

  const longestParagraphWords = 0;

  const shortestParagraphWords = 0;

  // --------------------- Readability ---------------------

  const readabilityScore = undefined;

  return {
    wordCount,
    characterCount,
    paragraphCount,
    sentenceCount,

    readingTimeMinutes,
    averageWordsPerSentence,
    averageWordsPerParagraph,

    textHtmlRatio,

    thinContent,
    duplicateContent,
    hasMainContent: false,

    hasLargeTextBlocks,
    hasBoilerplateDominance,

    longestParagraphWords,
    shortestParagraphWords,

    readabilityScore,
  };
}
