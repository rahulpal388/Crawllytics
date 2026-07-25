


type DocumentationLink = {
    title: string;
    url: string;
};

export type RecommendationType = {
    title: string;
    description: string;
    whyItMatters: string;
    howToFix: string[];
    documentationLinks: readonly DocumentationLink[];
}