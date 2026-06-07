


export async function getImageSize(src: string): Promise<number | null> {

    try {
        const response = await fetch(src, {
            method: "HEAD"
        })

        const size = response.headers.get("content-length")
        return size ? Number(size) : null;
    } catch {
        return null;
    }


}