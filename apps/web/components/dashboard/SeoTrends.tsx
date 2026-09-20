import { Card } from "@repo/ui/components/card/card";
import { TrendChart } from "@repo/ui/components/charts/trendChart";
import { IssueDistributionItem } from "@repo/ui/components/issueDistributionItems";

export const seoTrendData = [
  {
    date: "2026-07-01",
    seoScore: 62,
    pagesCrawled: 845,
    totalIssues: 264,
    critical: 28,
    high: 71,
    medium: 98,
    low: 67,
  },
  {
    date: "2026-07-04",
    seoScore: 65,
    pagesCrawled: 901,
    totalIssues: 249,
    critical: 24,
    high: 67,
    medium: 94,
    low: 64,
  },
  {
    date: "2026-07-07",
    seoScore: 68,
    pagesCrawled: 968,
    totalIssues: 231,
    critical: 20,
    high: 61,
    medium: 90,
    low: 60,
  },
  {
    date: "2026-07-10",
    seoScore: 71,
    pagesCrawled: 1023,
    totalIssues: 216,
    critical: 17,
    high: 56,
    medium: 85,
    low: 58,
  },
  {
    date: "2026-07-13",
    seoScore: 73,
    pagesCrawled: 1087,
    totalIssues: 201,
    critical: 15,
    high: 50,
    medium: 79,
    low: 57,
  },
  {
    date: "2026-07-16",
    seoScore: 76,
    pagesCrawled: 1148,
    totalIssues: 186,
    critical: 13,
    high: 46,
    medium: 73,
    low: 54,
  },
  {
    date: "2026-07-19",
    seoScore: 79,
    pagesCrawled: 1196,
    totalIssues: 170,
    critical: 11,
    high: 41,
    medium: 67,
    low: 51,
  },
  {
    date: "2026-07-22",
    seoScore: 81,
    pagesCrawled: 1234,
    totalIssues: 157,
    critical: 9,
    high: 37,
    medium: 62,
    low: 49,
  },
  {
    date: "2026-07-25",
    seoScore: 83,
    pagesCrawled: 1286,
    totalIssues: 143,
    critical: 8,
    high: 33,
    medium: 57,
    low: 45,
  },
  {
    date: "2026-07-28",
    seoScore: 85,
    pagesCrawled: 1321,
    totalIssues: 132,
    critical: 6,
    high: 29,
    medium: 52,
    low: 45,
  },
  {
    date: "2026-07-31",
    seoScore: 87,
    pagesCrawled: 1358,
    totalIssues: 123,
    critical: 5,
    high: 26,
    medium: 48,
    low: 44,
  },
];
export function SeoTrends() {
  return (
    <Card className="bg-surface-base flex flex-1 flex-col gap-6 p-6">
      <h3 className="heading text-xl">SEO Trends</h3>

      <TrendChart
        labels={seoTrendData.map((item) =>
          new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        )}
        values={seoTrendData.map((item) => item["totalIssues"])}
        showArea
      />
    </Card>
  );
}
