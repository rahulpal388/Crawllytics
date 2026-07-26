




export type DocumentationLinkType = {
    title: string;
    url: string;
};

export type RecommendationType = {
    title: string;
    description: string;
    whyItMatters: string;
    howToFix: readonly string[];
    documentationLinks: readonly DocumentationLinkType[];
}