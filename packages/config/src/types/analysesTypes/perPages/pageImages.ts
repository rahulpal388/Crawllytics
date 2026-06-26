




// export type PageImagesAnalysis = {
//     imageCount: number;

//     imagesWithoutAlt: number;

//     imagesOver100KB: number;

//     imagesOver500KB: number;

//     lazyLoadedImages: number;
// }



export type PageImagesAnalysis = {
    // Counts
    imageCount: number;

    // Accessibility
    imagesWithoutAlt: number;
    emptyAltImages: number;
    duplicateAltImages: number;

    // Performance
    imagesOver100KB: number;
    imagesOver500KB: number;
    totalImageSizeBytes: number;

    lazyLoadedImages: number;
    imagesNotLazyLoaded: number;

    imagesMissingDimensions: number;






}