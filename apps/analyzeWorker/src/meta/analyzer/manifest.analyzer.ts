import { ManifestAnalysis } from "@repo/config/types/analysesTypes/perPages/pageMeta";


export function analyzeManifest(
    manifest: string | null
): ManifestAnalysis {
    return {
        hasManifest:
            manifest !== null &&
            manifest.trim().length > 0,
    };
}