import { TwitterCardAnalysis } from "@repo/contract/types/analysesTypes/perPages/pageMeta";
import { TwitterCardType } from "@repo/contract/types/urlInformationType/htmlHeaderResponseTypes";

export function analyzeTwitterCard(twitter: TwitterCardType): TwitterCardAnalysis {
  return {
    hasTwitterCard: !!twitter.card || !!twitter.title || !!twitter.description || !!twitter.image,

    hasTwitterCardType: !!twitter.card,
    hasTwitterTitle: !!twitter.title,
    hasTwitterDescription: !!twitter.description,
    hasTwitterImage: !!twitter.image,
    hasTwitterSite: !!twitter.site,
    hasTwitterCreator: !!twitter.creator,

    hasTwitterPlayer: !!twitter.player.playerUrl,
  };
}
