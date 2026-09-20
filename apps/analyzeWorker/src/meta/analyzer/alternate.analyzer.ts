import { AlternateAnalysis } from "@repo/contract/types/analysesTypes/perPages/pageMeta";
import { HTMLAlternateType } from "@repo/contract/types/urlInformationType/htmlHeaderResponseTypes";

export function analyzeAlternate(alternates: HTMLAlternateType[]): AlternateAnalysis {
  return {
    hasAlternate: alternates.length > 0,
    alternateCount: alternates.length,
  };
}
