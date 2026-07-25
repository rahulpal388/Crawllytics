import { HTMLCanonicalType } from "../../urlInformationType/htmlHeaderResponseTypes.js";

export type PageIndexabilityType = {
  url: string;
  statusCode: number;
  metaRobots: string[];
  xRobotsTag: string[];
  canonicalUrl: HTMLCanonicalType[];
  contentType: string | null;
};
