

export type HTMLStructureDataType = {
    JsonLdBlocks: JsonLdBlock[],
    schemaTypes: string[]
    hasMicroData: boolean;
    hasRdfa: boolean;
    richResultEligible: string[];
    breadcrumbs: BreadcrumbItem[];
    faqCount: number;
    productSchema: ProductSchemaType | null;
    localBusinessSchema: boolean;
    hasReviewSchema: boolean;
}


export type JsonLdBlock = {
    rawJson: string;
    schemaType: string | null;
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

export type BreadcrumbItem = {
    url: string;
    name: string;
    position: number;
}

export type ProductSchemaType = {
    name: string;
    price: number;
    currency: string;
    availability: string;
    rating: number;
    reviewCount: number;
}