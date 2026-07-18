import { LinkType } from "@repo/config/types/urlInformationType/htmlLinksTypes";

export function getLinkType(href: string, absoluteUrl: URL, baseUrl: URL): LinkType {
  const value = href.trim().toLowerCase();

  if (value.startsWith("#")) {
    return "same-page";
  }

  if (value.startsWith("mailto:")) {
    return "mailto";
  }

  if (value.startsWith("tel:")) {
    return "tel";
  }

  if (value.startsWith("javascript:")) {
    return "javascript";
  }

  if (value.startsWith("data:")) {
    return "data";
  }

  if (value.startsWith("ftp:")) {
    return "ftp";
  }

  return absoluteUrl.hostname === baseUrl.hostname ? "internal" : "external";
}
