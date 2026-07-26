import { MetaRobotsAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";


export function analyzeMetaRobots(
    directives: string[]
): MetaRobotsAnalysis {
    console.log("analyzeMetaRobots directives", directives);
    const values = new Set(
        directives.map(v => v.toLowerCase())
    );

    return {
        hasMetaRobots: directives.length > 0,
        robotsMetaCount: directives.length,
        hasMultipleMetaRobots: directives.length > 1,

        metaIndex: values.has("index"),
        metaNoindex: values.has("noindex"),
        metaFollow: values.has("follow"),
        metaNofollow: values.has("nofollow"),
        metaNoarchive: values.has("noarchive"),
        metaNosnippet: values.has("nosnippet"),
        metaNoimageindex: values.has("noimageindex"),
        metaIndexIfEmbedded: values.has("indexifembedded"),

        hasMaxSnippet: directives.some(v => v.startsWith("max-snippet")),
        hasMaxImagePreview: directives.some(v =>
            v.startsWith("max-image-preview")
        ),
        hasMaxVideoPreview: directives.some(v =>
            v.startsWith("max-video-preview")
        ),
        hasUnavailableAfter: directives.some(v =>
            v.startsWith("unavailable_after")
        ),

        conflictingRobotsDirectives:
            (values.has("index") && values.has("noindex")) ||
            (values.has("follow") && values.has("nofollow"))
    };
}