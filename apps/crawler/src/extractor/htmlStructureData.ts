import { getJsonLdBlocks } from "@/utils/structuredData/getJsonLdBlock.js";
import { getBreadcrumbs } from "@/utils/structuredData/getBreadCrumbItem.js";
import { HTMLStructureDataType } from "@repo/config/types/urlInformationType/htmlStructureDataTypes";
import { getSchemaCounts } from "@/utils/structuredData/getSchemaCount.js";
import { getHasMicrodata } from "@/utils/structuredData/getHasMicroData.js";
import { getHasRdfa } from "@/utils/structuredData/getHasRdfa.js";
import { getFaqCount } from "@/utils/structuredData/getFaqCountData.js";
import { getSchemaTypes } from "@/utils/structuredData/getSchemaData.js";
import * as cheerio from "cheerio";
import { getOrganization } from "@/utils/structuredData/getOrganizationData.js";
import { getWebsiteData } from "@/utils/structuredData/getWebsiteData.js";
import { getArticleData } from "@/utils/structuredData/getArticleData.js";

export function htmlStructureData($: cheerio.CheerioAPI): HTMLStructureDataType {
  const jsonLdBlocks = getJsonLdBlocks($);
  const breadcrumbs = getBreadcrumbs(jsonLdBlocks);
  const schemaTypes = getSchemaTypes(jsonLdBlocks);
  const hasMicroData = getHasMicrodata($);
  const hasRdfa = getHasRdfa($);
  // const richResultEligible = findRichResultEligibility(jsonLdBlocks);
  const faqCount = getFaqCount(jsonLdBlocks);
  const counts = getSchemaCounts(jsonLdBlocks);
  const organizationData = getOrganization(jsonLdBlocks);
  const websiteData = getWebsiteData(jsonLdBlocks);
  const articleData = getArticleData(jsonLdBlocks);

  return {
    jsonLdBlocks,
    breadcrumbs,
    schemaTypes,
    hasMicrodata: hasMicroData,
    hasRdfa: hasRdfa,
    faqCount: faqCount,
    organizationName: organizationData.organizationName,
    organizationLogo: organizationData.organizationLogo,
    websiteName: websiteData.websiteName,
    articleAuthor: articleData.articleAuthor,
    articlePublishedTime: articleData.articlePublishedTime,
    articleModifiedTime: articleData.articleModifiedTime,
    productCount: counts.productCount,
    reviewCount: counts.reviewCount,
    videoCount: counts.videoCount,
    eventCount: counts.eventCount,
    localBusinessCount: counts.localBusinessCount,
    personCount: counts.personCount,
  };
}
