import crypto from "node:crypto";

import { GatherInfoType } from "@/types/gatherInfoType.js";
import { PageContentAnalysis } from "@repo/config/types/analysesTypes/perPages/pageContent";

export function content(gatherInfo: GatherInfoType): PageContentAnalysis {
  // --------------------- Counts ---------------------

  const { wordCount, characterCount, paragraphCount, sentenceCount } =
    gatherInfo.htmlHeadingContent.count;

  // --------------------- Reading ---------------------

  const averageWordsPerSentence =
    sentenceCount === 0 ? 0 : Number((wordCount / sentenceCount).toFixed(2));

  const averageWordsPerParagraph =
    paragraphCount === 0 ? 0 : Number((wordCount / paragraphCount).toFixed(2));

  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // --------------------- HTML ---------------------

  const textHtmlRatio = gatherInfo.htmlDocument.textHtmlRatio;

  // --------------------- Quality ---------------------

  const thinContent = wordCount < 300;

  // Will be determined after comparing every page
  const duplicateContent = false;

  // --------------------- Structure ---------------------

  const hasMainContent = gatherInfo.htmlDocument.hasMainTag;

  const hasLargeTextBlocks = gatherInfo.htmlHeadingContent.structure.longestParagraphWords > 200;

  const hasBoilerplateDominance = textHtmlRatio < 0.15;

  // --------------------- Distribution ---------------------

  const longestParagraphWords = gatherInfo.htmlHeadingContent.structure.longestParagraphWords;

  const shortestParagraphWords = gatherInfo.htmlHeadingContent.structure.shortestParagraphWords;

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

    hasMainContent,
    hasLargeTextBlocks,
    hasBoilerplateDominance,

    longestParagraphWords,
    shortestParagraphWords,

    readabilityScore,
  };
}
