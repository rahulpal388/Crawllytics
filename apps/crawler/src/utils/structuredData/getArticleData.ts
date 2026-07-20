import { JsonLdBlockType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";

export function getArticleData(jsonLdBlocks: JsonLdBlockType[]) {
  let articleAuthor: string | null = null;
  let articlePublishedTime: string | null = null;
  let articleModifiedTime: string | null = null;

  for (const block of jsonLdBlocks) {
    if (!block.parsedJson) continue;

    const objects = Array.isArray(block.parsedJson) ? block.parsedJson : [block.parsedJson];

    for (const obj of objects) {
      const type = obj["@type"];

      if (type !== "Article" && type !== "NewsArticle" && type !== "BlogPosting") {
        continue;
      }

      const author = obj["author"];

      if (typeof author === "string") {
        articleAuthor = author;
      } else if (
        typeof author === "object" &&
        author !== null &&
        typeof (author as Record<string, unknown>)["name"] === "string"
      ) {
        articleAuthor = (author as Record<string, unknown>)["name"] as string;
      }

      if (typeof obj["datePublished"] === "string") {
        articlePublishedTime = obj["datePublished"];
      }

      if (typeof obj["dateModified"] === "string") {
        articleModifiedTime = obj["dateModified"];
      }

      return {
        articleAuthor,
        articlePublishedTime,
        articleModifiedTime,
      };
    }
  }

  return {
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
  };
}
