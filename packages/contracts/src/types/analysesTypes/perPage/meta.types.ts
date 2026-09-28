


export type MetaAnalysisType = {
    // title
    title: {
        text: string;
        lengthChar: number;
        lengthPixel: number; // <- google truncates at ~600px;
    };
    titleCount: number;

    // meta description

    metaDescription: {
        text: string;
        lengthChar: number;
        lengthPixel: number; // <- google truncates at ~960px;
    };


}