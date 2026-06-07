import { isAbsoluteUrl } from "@/utils/isAbsoluteUrl.js";



export async function getImageSize(src: string, baseUrl: URL): Promise<number | null> {

    try {
        const isAbsolute = isAbsoluteUrl(src);
        if (!isAbsolute) {
            src = new URL(src, baseUrl).href;

        }

        const response = await fetch(src, {
            method: "HEAD"
        })

        const size = response.headers.get("content-length")
        return size ? Number(size) : null;
    } catch {
        return null;
    }


}