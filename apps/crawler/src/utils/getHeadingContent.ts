import { HTMLHeadingContentType } from "@repo/config/types/urlInformationType/htmlHeadingContentsTypes";


export function getHeadingContent(text: string): HTMLHeadingContentType {
    return {
        text,
        charLength: text.length,
        wordCount: text.split(/\s+/).filter(Boolean).length
    }

}