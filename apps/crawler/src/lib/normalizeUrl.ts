export function normalizeURL(url: string, baseUrl?: string) {
  try {
    const newUrl = new URL(url, baseUrl);
    newUrl.hash = "";
    return newUrl;
  } catch {
    return null;
  }
}
