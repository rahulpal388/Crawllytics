import { AccessibilityType } from "@repo/config/types/urlInformationType/accessibilityTypes";
import * as Cheerio from "cheerio";

export function accessibilityInfo($: Cheerio.CheerioAPI): AccessibilityType {
  let formsWithoutLabels = 0;
  let buttonsWithoutText = 0;
  let langDeclared = false;
  let tablesMissingHeaders = 0;

  // ------------- form-without-labels --------------------------

  $("form")
    .find("input, select, textarea")
    .each((_, element) => {
      const $el = $(element);

      const id = $el.attr("id");

      const hasAriaLabel = !!$el.attr("aria-label") || !!$el.attr("aria-labelledby");

      const wrappedByLabel = $el.closest("label").length > 0;

      const hasForLabel = !!id && $(`label[for="${id}"]`).length > 0;
      if (!wrappedByLabel && !hasForLabel && !hasAriaLabel) {
        formsWithoutLabels++;
      }
    });

  // ------------------- buttons-without-text -----------------------

  $("button").each((_, element) => {
    const $el = $(element);
    const text = $el.text().trim();
    if (text.length === 0) {
      buttonsWithoutText++;
    }
  });

  // ---------------------- aria-landmarks -----------------------

  langDeclared = $("html").attr("lang") !== undefined;

  $("table").each((_, table) => {
    const hasHeaders = $(table).find("th").length > 0;

    if (!hasHeaders) {
      tablesMissingHeaders++;
    }
  });

  return {
    formsWithoutLabels,
    buttonsWithoutText,
    langDeclared,
    tablesMissingHeaders,
  };
}
