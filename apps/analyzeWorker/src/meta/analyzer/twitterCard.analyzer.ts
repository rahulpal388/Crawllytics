import { TwitterCardAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { TwitterCardType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";



export function analyzeTwitterCard(
    twitter: TwitterCardType
): TwitterCardAnalysis {
    return {
        hasTwitterCard:
            !!twitter.card ||
            !!twitter.title ||
            !!twitter.description ||
            !!twitter.image,

        hasTwitterCardType: !!twitter.card,
        hasTwitterTitle: !!twitter.title,
        hasTwitterDescription: !!twitter.description,
        hasTwitterImage: !!twitter.image,
        hasTwitterSite: !!twitter.site,
        hasTwitterCreator: !!twitter.creator,

        hasTwitterPlayer:
            !!twitter.player.playerUrl,
    };
}