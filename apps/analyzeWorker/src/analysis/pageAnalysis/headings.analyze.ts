import { PageHeadingAnalysis } from "@repo/config/types/analysesTypes/perPages/pageHeading";
import { GatherInfoType } from "@/types/gatherInfoType.js";

export function headingsAnalyze(htmlHeadingContents: GatherInfoType["htmlHeadingContent"]): PageHeadingAnalysis {

    const h1Count = htmlHeadingContents.h1.length
    const h2Count = htmlHeadingContents.h2.length
    const headingCount = htmlHeadingContents.h1.length + htmlHeadingContents.h2.length + htmlHeadingContents.h3H6.length

    const hasH1 = h1Count > 0
    const multipleH1 = h1Count > 1
    const duplicateH1 = htmlHeadingContents.h1.length !== new Set(htmlHeadingContents.h1.map(h => h.text)).size



    return {
        h1Count,
        h2Count,
        headingCount,
        hasH1,
        multipleH1,
        duplicateH1,
    };
}