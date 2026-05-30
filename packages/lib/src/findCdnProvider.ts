import { CDN_PROVIDERS } from "@repo/config/constant/cdnProvider";

export function findCdnProvider(headers: Record<string, string>): string | null {

    for (const cdn of CDN_PROVIDERS) {
        for (const header of cdn.header) {
            if (headers[header]) {
                return cdn.provider;
            }
        }
    }

    return null;

}