import zlib from "zlib";


export function deCompress(compressedBuffer: Buffer, compressionEncoding: string | null): string {

    let html = "";

    if (compressionEncoding === "gzip") {
        html = zlib.gunzipSync(compressedBuffer).toString("utf8");
    }
    else if (compressionEncoding === "br") {
        html = zlib.brotliDecompressSync(compressedBuffer).toString("utf8");
    }
    else if (compressionEncoding === "deflate") {
        html = zlib.inflateSync(compressedBuffer).toString("utf8");
    }
    else {
        html = compressedBuffer.toString("utf8");
    }
    return html;
}