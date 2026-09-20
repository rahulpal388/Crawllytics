import http from "node:http";
import { CDN_PROVIDERS } from "@repo/contracts/constant/cdnProvider";

export function getCDNProvider(header: http.IncomingHttpHeaders): string[] {
  const providers = new Set<string>();

  for (const CDN of CDN_PROVIDERS) {
    if (header[CDN.header.toLowerCase()]) {
      providers.add(CDN.provider);
    }
  }

  return Array.from(providers);
}
