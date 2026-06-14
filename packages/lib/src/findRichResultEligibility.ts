import { RICH_RESULT_ELIGIBLE } from "@repo/config/constant/googleRichResultEligible";

export function findRichResultEligibility(schema: string[]): string[] {
    const eligibleRichResults: string[] = [];
    for (const st of schema) {
        if (RICH_RESULT_ELIGIBLE.has(st)) {
            eligibleRichResults.push(st);
        }
    }
    return eligibleRichResults;
}