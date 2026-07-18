export type PageUrlQualityAnalysis = {
  urlLength: number;

  urlDepth: number;

  hasUppercase: boolean;

  hasUnderscores: boolean;

  hasQueryParams: boolean;

  queryParamCount: number;

  hasFragment: boolean;

  containsStopWords: boolean;

  containsDate: boolean;

  slugWordCount: number;
};
