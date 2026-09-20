export function getImageFormate(extension: string | null) {
  switch (extension) {
    case "jpg":
      return "jpg";
    case "jpeg":
      return "jpeg";
    case "png":
      return "png";
    case "gif":
      return "gif";
    case "svg":
      return "svg";
    case "webp":
      return "webp";
    case "avif":
      return "avif";
    case "bmp":
      return "bmp";
    case "ico":
      return "ico";
    default:
      return extension ? "other" : null;
  }
}
