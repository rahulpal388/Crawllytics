import { ViewportAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";
import { HTMLMetaViewportType } from "@repo/config/types/urlInformationType/htmlHeaderResponseTypes";


export function analyzeViewport(
    viewports: HTMLMetaViewportType[]
): ViewportAnalysis {
    return {
        hasViewport: viewports.length > 0,
        viewportCount: viewports.length,
        hasMultipleViewports: viewports.length > 1,

        hasViewportWidth: viewports.some(
            v => v.width !== null
        ),

        hasInitialScale: viewports.some(
            v => v.initialScale !== null
        ),

        hasMinimumScale: viewports.some(
            v => v.minimumScale !== null
        ),

        hasMaximumScale: viewports.some(
            v => v.maximumScale !== null
        ),

        hasUserScalable: viewports.some(
            v => v.userScalable !== null
        ),

        hasViewportFit: viewports.some(
            v => v.viewportFit !== null
        ),

        hasInteractiveWidget: viewports.some(
            v => v.interactiveWidget !== null
        ),
    };
}