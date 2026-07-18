export type Severity = "info" | "warning" | "error";
export type SEOIssues = {
  name: string;
  severity: Severity;
  message: string;
};
