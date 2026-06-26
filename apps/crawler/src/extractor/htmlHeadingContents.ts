

import * as cheerio from "cheerio";
import {
    HTMLHeadingContentsType,
    HTMLHeadingType,
} from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";
import { getHeadingContent } from "@/utils/getHeadingContent.js";

export function htmlContentsExtractor(
    $: cheerio.CheerioAPI
): HTMLHeadingContentsType {

    // --------------------- Heading Collection ---------------------

    const h1Contents: HTMLHeadingType[] = [];
    const h2Contents: HTMLHeadingType[] = [];
    const h3H6Contents: HTMLHeadingType[] = [];

    const headingTexts: string[] = [];
    let headingWordCount = 0;
    let emptyHeadings = 0;
    let firstHeadingLevel: 1 | 2 | 3 | 4 | 5 | 6 | null = null;

    const headingLevels: number[] = [];

    $("h1,h2,h3,h4,h5,h6").each((_, el) => {
        const tag = el.tagName.toLowerCase();
        const level = Number(tag.substring(1)) as 1 | 2 | 3 | 4 | 5 | 6;

        if (firstHeadingLevel === null) {
            firstHeadingLevel = level;
        }

        headingLevels.push(level);

        const text = $(el).text().trim();

        if (!text) {
            emptyHeadings++;
        }

        const heading = getHeadingContent(text);

        headingTexts.push(text.toLowerCase());

        headingWordCount += heading.wordCount;

        switch (level) {
            case 1:
                h1Contents.push(heading);
                break;

            case 2:
                h2Contents.push(heading);
                break;

            default:
                h3H6Contents.push(heading);
        }
    });

    // --------------------- Content Statistics ---------------------

    const bodyText = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

    const characterCount = bodyText.length;

    const wordCount =
        bodyText.length === 0
            ? 0
            : bodyText.split(/\s+/).length;


    // --------------------- Paragraph and Sentence Counts ---------------------
    let paragraphCount = 0;
    let longestParagraphWords = 0;
    let shortestParagraphWords = 0;
    $("p").each((idx, el) => {
        paragraphCount++;
        const txt = $(el).text().trim();
        const txtLen = txt.length;
        longestParagraphWords = txtLen > longestParagraphWords ? txtLen : longestParagraphWords;

        if (shortestParagraphWords === 0) {
            shortestParagraphWords = txtLen;
        } else {


            shortestParagraphWords = txtLen < shortestParagraphWords ? txtLen : shortestParagraphWords;
        }

    })

    const sentenceCount =
        bodyText
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim().length > 0).length;

    const averageWordsPerSentence =
        sentenceCount === 0
            ? 0
            : Number((wordCount / sentenceCount).toFixed(2));

    const averageWordsPerParagraph =
        paragraphCount === 0
            ? 0
            : Number((wordCount / paragraphCount).toFixed(2));

    // --------------------- Heading Structure ---------------------

    const headingCount =
        h1Contents.length +
        h2Contents.length +
        h3H6Contents.length;

    const duplicateHeadings =
        headingTexts.length -
        new Set(headingTexts).size;

    let skippedHeadingLevels = false;

    for (let i = 1; i < headingLevels.length; i++) {
        const previous = headingLevels[i - 1];
        const current = headingLevels[i];

        if (previous === undefined || current === undefined) {
            continue;
        }

        if (current - previous > 1) {
            skippedHeadingLevels = true;
            break;
        }
    }

    // --------------------- Heading Without Content ---------------------

    let headingsWithoutContent = 0;

    $("h1,h2,h3,h4,h5,h6").each((_, el) => {
        const next = $(el).nextAll().first();

        const nextElement = next.get(0);

        if (
            !nextElement ||
            !["p", "ul", "ol", "div", "section", "article"].includes(
                nextElement.tagName.toLowerCase()
            )
        ) {
            headingsWithoutContent++;
        }
    });



    // --------------------- Ratios ---------------------

    const headingToContentRatio =
        wordCount === 0
            ? 0
            : Number((headingWordCount / wordCount).toFixed(3));

    // --------------------- Return ---------------------

    return {
        h1: h1Contents,
        h2: h2Contents,
        h3H6: h3H6Contents,

        count: {
            headingCount,

            wordCount,
            characterCount,

            paragraphCount,
            sentenceCount,

            averageWordsPerSentence,
            averageWordsPerParagraph,
        },

        structure: {
            firstHeadingLevel,
            longestParagraphWords,
            shortestParagraphWords,
            skippedHeadingLevels,

            duplicateHeadings,

            emptyHeadings,

            headingsWithoutContent,

            headingWordCount,

            headingToContentRatio,
        },
    };
}