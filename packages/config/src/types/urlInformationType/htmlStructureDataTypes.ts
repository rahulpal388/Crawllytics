export type HTMLStructureDataType = {
  jsonLdBlocks: JsonLdBlockType[];
  breadcrumbs: BreadcrumbItemType[];
  schemaTypes: string[];
  hasMicrodata: boolean;
  hasRdfa: boolean;
  faqCount: number;
  organizationName: string | null;
  organizationLogo: string | null;
  websiteName: string | null;
  articleAuthor: string | null;
  articlePublishedTime: string | null;
  articleModifiedTime: string | null;
  productCount: number;
  reviewCount: number;
  videoCount: number;
  eventCount: number;
  localBusinessCount: number;
  personCount: number;
};

export type JsonLdBlockType = {
  rawJson: string;
  parsedJson: Record<string, unknown> | Record<string, unknown>[] | null;
  schemaType: string | string[] | null;
  context: string | null;
  id: string | null;
  isParsable: boolean;
  parseErrors: string[];
};

export type BreadcrumbItemType = {
  position: number;
  name: string;
  url: string;
};
