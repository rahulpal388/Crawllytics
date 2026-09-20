export type PageAccessibilityAnalysis = {
  imagesWithoutAlt: number;

  formInputsWithoutLabel: number;

  buttonsWithoutText: number;

  missingLangAttribute: boolean;
};
