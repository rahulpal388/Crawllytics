import { SEOIssues } from "@/types/seoIssuesTypes.js";

export type Rule<T> = SEOIssues & {
  check(data: T): boolean;
};
