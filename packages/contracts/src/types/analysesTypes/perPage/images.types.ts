
export type ImageAnalysisType = {
  totalImages: number;

  imagesMissingAlt: number;
  imagesWithEmptyAlt: number;
  imagesWithLongAlt: number;
  imagesWithDuplicateAlt: number;

  imagesMissingWidth: number;
  imagesMissingHeight: number;
  imagesWithoutLazyLoading: number;
  imagesWithLazyLoadingAboveFold: number;

  imagesWithoutExplicitDimensions: number;
  imagesWithLargeFileSize: number;
  imagesWithUnoptimizedFormat: number;

  imagesWithUn_descriptiveFilename: number;
  imagesWithGenericFilename: number;

  imagesWithoutResponsiveSources: number;
  imagesWithoutSrcset: number;
  imagesWithoutSizes: number;

  imagesNotPreloadedWhenImportant: number;
  imagesWithLowFetchPriority: number;
  imagesWithMissingTitle: number;

  imagesUsingBackgroundImage: number;
  imagesBroken: number;
  imagesWithInvalidUrl: number;

  imagesWithKeywordInFilename: number;
  imagesAboveTheFold: number;
  heroImages: number;
};

