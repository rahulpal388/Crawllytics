import { UrlAnalysesType } from "@repo/config/types/urlInformationType/urlAnalysesTypes";
import { Rule } from "@/types/ruleTypes.js";

export const URL_RULES: Rule<UrlAnalysesType>[] = [
  {
    name: "LONG_URL",
    severity: "warning",
    message: "URL is longer than the recommended length.",
    check: (data) => data.urlLength > 115,
  },

  {
    name: "VERY_LONG_URL",
    severity: "error",
    message: "URL is excessively long and may impact usability and sharing.",
    check: (data) => data.urlLength > 200,
  },

  {
    name: "DEEP_URL",
    severity: "warning",
    message: "URL is deeply nested.",
    check: (data) => data.urlDepth > 4,
  },

  {
    name: "VERY_DEEP_URL",
    severity: "error",
    message: "URL structure is excessively deep.",
    check: (data) => data.urlDepth > 6,
  },

  {
    name: "QUERY_PARAMETERS_PRESENT",
    severity: "info",
    message: "URL contains query parameters.",
    check: (data) => data.hasQueryParams,
  },

  {
    name: "TRACKING_PARAMETERS",
    severity: "warning",
    message: "Tracking parameters detected.",
    check: (data) =>
      data.queryParams.some((param) =>
        [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_term",
          "utm_content",
          "gclid",
          "fbclid",
          "msclkid",
        ].includes(param.toLowerCase()),
      ),
  },

  {
    name: "SESSION_PARAMETERS",
    severity: "error",
    message: "Session parameters detected. These can generate duplicate URLs.",
    check: (data) =>
      data.queryParams.some((param) =>
        ["sessionid", "sid", "phpsessid", "jsessionid"].includes(param.toLowerCase()),
      ),
  },

  {
    name: "TOO_MANY_QUERY_PARAMETERS",
    severity: "warning",
    message: "URL contains many query parameters.",
    check: (data) => data.queryParams.length > 4,
  },

  {
    name: "URL_FRAGMENT_PRESENT",
    severity: "info",
    message: "URL contains a fragment identifier (#).",
    check: (data) => data.hasFragment,
  },

  {
    name: "UPPERCASE_URL",
    severity: "warning",
    message: "URL contains uppercase characters.",
    check: (data) => data.hasUppercase,
  },

  {
    name: "UNDERSCORE_IN_URL",
    severity: "info",
    message: "URL contains underscores. Hyphens are generally preferred.",
    check: (data) => data.hasUnderscores,
  },

  {
    name: "SPACES_IN_URL",
    severity: "error",
    message: "URL contains spaces.",
    check: (data) => data.hasSpaces,
  },

  {
    name: "NON_ASCII_URL",
    severity: "info",
    message: "URL contains non-ASCII characters.",
    check: (data) => data.hasNonAscii,
  },

  {
    name: "FILE_EXTENSION_IN_URL",
    severity: "info",
    message: "URL exposes a file extension.",
    check: (data) => data.hasFileExtension,
  },

  {
    name: "HTML_FILE_URL",
    severity: "info",
    message: "URL contains an HTML file extension.",
    check: (data) => data.fileExtension.some((ext) => ["html", "htm"].includes(ext.toLowerCase())),
  },

  {
    name: "PHP_FILE_URL",
    severity: "info",
    message: "URL contains a PHP file extension.",
    check: (data) => data.fileExtension.some((ext) => ["php"].includes(ext.toLowerCase())),
  },

  {
    name: "DOCUMENT_FILE_URL",
    severity: "warning",
    message: "URL points to a document file.",
    check: (data) =>
      data.fileExtension.some((ext) =>
        ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(ext.toLowerCase()),
      ),
  },

  {
    name: "IMAGE_FILE_URL",
    severity: "info",
    message: "URL points directly to an image file.",
    check: (data) =>
      data.fileExtension.some((ext) =>
        ["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"].includes(ext.toLowerCase()),
      ),
  },

  {
    name: "REPETITIVE_PATH",
    severity: "warning",
    message: "Repeated path segments detected.",
    check: (data) => data.hasRepetitivePath,
  },
];
