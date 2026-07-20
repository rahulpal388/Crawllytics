export type HTMLHeadingContentType = {
  headings: HTMLHeadingType[];
  content: HTMLContentType;
};

export type HTMLHeadingType = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  characterCount: number;
  wordCount: number;
  id: string | null;
  position: number; // order in document
  hasAnchor: boolean;
};

export type HTMLContentType = {
  visibleText: string;
  language: string | null;
  contentHash: string;
};
