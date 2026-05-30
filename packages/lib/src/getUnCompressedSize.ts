import zlib from "zlib";
import { CompressionEncodingType } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";


export function getUnCompressedSize(buffer: Buffer[], encoding: CompressionEncodingType): number {

    const compressedBuffer =
        Buffer.concat(buffer);


    let decompressed: Buffer;

    if (encoding === "gzip") {
        decompressed =
            zlib.gunzipSync(compressedBuffer);
    } else if (encoding === "br") {
        decompressed =
            zlib.brotliDecompressSync(compressedBuffer);
    } else if (encoding === "deflate") {
        decompressed =
            zlib.inflateSync(compressedBuffer);
    } else {
        decompressed =
            compressedBuffer;
    }


    return decompressed.length;

}