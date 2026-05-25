


type HTMLHeadingContentType = {
    count: number;
    texts: string[];
}

export type HTMLContentsType = {

    h1: HTMLHeadingContentType,
    h2: HTMLHeadingContentType,
    h3H6: HTMLHeadingContentType
    words: {
        count: number;
    }

}