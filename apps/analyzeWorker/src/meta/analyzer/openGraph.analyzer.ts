import { OpenGraphAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HTMLOpenGraphType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";



export function analyzeOpenGraph(
    og: HTMLOpenGraphType
): OpenGraphAnalysis {
    return {
        hasOpenGraph:
            og.title !== null ||
            og.description !== null ||
            og.image.length > 0 ||
            og.audio.length > 0 ||
            og.video.length > 0 ||
            og.url !== null ||
            og.type !== null ||
            og.siteName !== null ||
            og.locale !== null,

        hasOgTitle: og.title !== null,
        hasOgDescription: og.description !== null,
        hasOgImage: og.image.length > 0,
        hasOgAudio: og.audio.length > 0,
        hasOgVideo: og.video.length > 0,
        hasOgUrl: og.url !== null,
        hasOgType: og.type !== null,
        hasOgSiteName: og.siteName !== null,
        hasOgLocale: og.locale !== null,
    };
}