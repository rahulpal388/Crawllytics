import { GatherInfoType } from "../../types/gatherInfoType.js";
import { PageImagesAnalysis } from "@repo/config/types/analysesTypes/perPages/pageImages";

export function imageAnalyse(imageInformation: GatherInfoType["media"]): PageImagesAnalysis {

    const imageCount = imageInformation.images.length;

    const imagesWithoutAlt = imageInformation.images.filter(image => !image.altText || image.altText.trim() === "").length;

    const emptyAltImages = imageInformation.images.filter(image => image.altText && image.altText.trim() === "").length;
    const duplicateAltImages = imageInformation.images.filter((image, index, self) =>
        image.altText && self.findIndex(img => img.altText === image.altText) !== index
    ).length;

    const imagesOver100KB = imageInformation.images.filter(image => image.fileSizeBytes && image.fileSizeBytes > 100 * 1024).length;
    const imagesOver500KB = imageInformation.images.filter(image => image.fileSizeBytes && image.fileSizeBytes > 500 * 1024).length;

    const totalImageSizeBytes = imageInformation.totalImageSize

    const lazyLoadedImages = imageInformation.imagesNotLazy
    const imagesNotLazyLoaded = imageInformation.images.length - lazyLoadedImages;
    const imagesMissingDimensions = imageInformation.imagesMissingDimensions




    return {
        imageCount,
        imagesWithoutAlt,
        emptyAltImages,
        duplicateAltImages,
        imagesOver100KB,
        imagesOver500KB,
        totalImageSizeBytes,
        lazyLoadedImages,
        imagesNotLazyLoaded,
        imagesMissingDimensions

    }
}