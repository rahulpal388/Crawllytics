

export type HTMLStructureDataType = {
    JsonLdBlocks: JsonLdBlock[],
    schemaTypes: string[]
    hasMicroData: boolean;
    hasRdfa: boolean;
    richResultEligible: string[]; // remeaning
    breadcrumbs: BreadcrumbItem[];
    faqCount: number;
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

