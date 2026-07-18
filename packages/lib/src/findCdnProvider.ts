import { CDN_PROVIDERS } from "@repo/config/constant/cdnProvider";

export function findCdnProvider(headers: Record<string, string>): string | null {
  for (const cdn of CDN_PROVIDERS) {
    if (headers[cdn.header]) {
      return cdn.provider;
    }
  }

  return null;
}
