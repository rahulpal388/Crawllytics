

export type ImageType = {
    src: string;
    altText: string;
    altLength: number;
    hasAlt: boolean;
    widthDeclared: boolean;
    heightDeclared: boolean;
    loading: 'lazy' | 'eager' | null;
    fetchPriority: 'high' | 'low' | 'auto' | null;
    decoding: 'async' | 'sync' | 'auto' | null;
    format: string | null;
    fileSizeBytes: number | null;
    isPreloaded: boolean;

};


export type VideoType = {
    src: string;
    type: string | null; // "video/mp4", "video/webm"
    autoPlay: boolean;
    controls: boolean;
    muted: boolean;
    preload: 'auto' | 'metadata' | 'none' | null;
    hasCaptions: boolean;
    hasTranscript: boolean;
    isEmbedded: boolean;
    embedProvider: "youtube" | "vimeo" | null;
};

export type HTMLMediaTypes = {
    images: ImageType[];
    videos: VideoType[];
    imagesMissingAlt: number;
    imagesMissingDimensions: number;
    imagesNotLazy: number;
    imagesBelowFoldNotLazy: number;
    imagesLegacyFormat: number;
    notWebpOrAvif: number;
    totalImageWeight: number;
};
