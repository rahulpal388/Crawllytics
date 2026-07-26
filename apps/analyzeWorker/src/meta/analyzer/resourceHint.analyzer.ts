import { ResourceHintsAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { ResourceHintType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";



export function analyzeResourceHints(
    hints: ResourceHintType[]
): ResourceHintsAnalysis {
    return {
        hasResourceHints: hints.length > 0,

        resourceHintCount: hints.length,

        hasPreconnect: hints.some(
            h => h.rel === "preconnect"
        ),

        hasDnsPrefetch: hints.some(
            h => h.rel === "dns-prefetch"
        ),

        hasPreload: hints.some(
            h => h.rel === "preload"
        ),

        hasPrefetch: hints.some(
            h => h.rel === "prefetch"
        ),

        hasModulePreload: hints.some(
            h => h.rel === "modulepreload"
        ),

        hasPrerender: hints.some(
            h => h.rel === "prerender"
        ),
    };
}