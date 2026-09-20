import { ManifestAnalysis } from "@repo/contract/types/analysesTypes/perPages/pageMeta";

export function analyzeManifest(manifest: string | null): ManifestAnalysis {
  return {
    hasManifest: manifest !== null && manifest.trim().length > 0,
  };
}
