import { CompressionEncodingType } from "@repo/contracts/types/crawl/urlCrawl/network/eachUrlNetworkTypes";

import { gunzipSync, inflateSync, brotliDecompressSync } from "node:zlib";

export function unCompressEncoding(encoding: CompressionEncodingType, body: Buffer): Buffer {
  switch (encoding?.toLowerCase()) {
    case "gzip":
      return gunzipSync(body);

    case "deflate":
      return inflateSync(body);

    case "br":
      return brotliDecompressSync(body);

    default:
      return body;
  }
}
