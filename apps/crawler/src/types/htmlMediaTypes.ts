export type ImageType = {
    src: string;
    altText: string;
    altTextLength: number;
    hasAltText: boolean;
    altEmpty: boolean;
    widthDeclare: boolean;
    heightDeclare: boolean;
    loadingAttribute: string;
};

export type VideoType = {
    src: string;
    hasVideo: boolean;
    videoType: string;
    hasTranscript: boolean;
    autoPlay: boolean;
};

export type HTMLMediaTypes = {
    images: ImageType[];
    videos: VideoType[];
};