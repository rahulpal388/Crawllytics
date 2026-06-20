


export type PageMetaAnalysis = {
    title: string | null;
    titleLength: number;

    metaDescription: string | null;
    metaDescriptionLength: number;

    hasTitle: boolean;
    hasMetaDescription: boolean;

    hasOpenGraph: boolean;

    hasTwitterCards: boolean;
}