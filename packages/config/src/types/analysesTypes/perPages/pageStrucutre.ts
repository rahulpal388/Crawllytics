export type StructuredDataAnalysis = {
    hasStructuredData: boolean;

    hasJsonLd: boolean;
    hasMicroData: boolean;
    hasRdfa: boolean;

    schemaTypes: string[];

    totalSchemas: number;
    validSchemas: number;
    invalidSchemas: number;

    richResultEligible: boolean;



    hasBreadcrumbSchema: boolean;
    hasFaqSchema: boolean;

}