import { Card } from "@repo/ui/components/card/card";
import { ChangeIndicator } from "@repo/ui/components/charts/changeIndicator";
import { TrendChart } from "@repo/ui/components/charts/trendChart";

export const googleSearchPerformance = [
  {
    date: "2026-07-23",
    clicks: 148,
    impressions: 4120,
    ctr: 3.59,
    position: 24.8,
  },
  {
    date: "2026-07-24",
    clicks: 156,
    impressions: 4285,
    ctr: 3.64,
    position: 24.3,
  },
  {
    date: "2026-07-25",
    clicks: 171,
    impressions: 4510,
    ctr: 3.79,
    position: 23.7,
  },
  {
    date: "2026-07-26",
    clicks: 183,
    impressions: 4700,
    ctr: 3.89,
    position: 23.4,
  },
  {
    date: "2026-07-27",
    clicks: 176,
    impressions: 4625,
    ctr: 3.81,
    position: 23.8,
  },
  {
    date: "2026-07-28",
    clicks: 194,
    impressions: 4890,
    ctr: 3.97,
    position: 22.9,
  },
  {
    date: "2026-07-29",
    clicks: 207,
    impressions: 5140,
    ctr: 4.03,
    position: 22.3,
  },
  {
    date: "2026-07-30",
    clicks: 216,
    impressions: 5280,
    ctr: 4.09,
    position: 21.8,
  },
  {
    date: "2026-07-31",
    clicks: 205,
    impressions: 5190,
    ctr: 3.95,
    position: 22.2,
  },
  {
    date: "2026-08-01",
    clicks: 196,
    impressions: 5010,
    ctr: 3.91,
    position: 22.5,
  },
  {
    date: "2026-08-02",
    clicks: 189,
    impressions: 4880,
    ctr: 3.87,
    position: 22.9,
  },
  {
    date: "2026-08-03",
    clicks: 181,
    impressions: 4755,
    ctr: 3.81,
    position: 23.5,
  },
  {
    date: "2026-08-04",
    clicks: 195,
    impressions: 4920,
    ctr: 3.96,
    position: 22.8,
  },
  {
    date: "2026-08-05",
    clicks: 211,
    impressions: 5230,
    ctr: 4.03,
    position: 22.0,
  },
  {
    date: "2026-08-06",
    clicks: 223,
    impressions: 5480,
    ctr: 4.07,
    position: 21.4,
  },
  {
    date: "2026-08-07",
    clicks: 232,
    impressions: 5645,
    ctr: 4.11,
    position: 21.0,
  },
  {
    date: "2026-08-08",
    clicks: 241,
    impressions: 5820,
    ctr: 4.14,
    position: 20.6,
  },
  {
    date: "2026-08-09",
    clicks: 252,
    impressions: 6035,
    ctr: 4.18,
    position: 20.1,
  },
  {
    date: "2026-08-10",
    clicks: 266,
    impressions: 6280,
    ctr: 4.24,
    position: 19.7,
  },
  {
    date: "2026-08-11",
    clicks: 281,
    impressions: 6540,
    ctr: 4.3,
    position: 19.1,
  },
  {
    date: "2026-08-12",
    clicks: 275,
    impressions: 6485,
    ctr: 4.24,
    position: 19.3,
  },
  {
    date: "2026-08-13",
    clicks: 269,
    impressions: 6390,
    ctr: 4.21,
    position: 19.5,
  },
  {
    date: "2026-08-14",
    clicks: 277,
    impressions: 6515,
    ctr: 4.25,
    position: 19.0,
  },
  {
    date: "2026-08-15",
    clicks: 291,
    impressions: 6760,
    ctr: 4.3,
    position: 18.6,
  },
  {
    date: "2026-08-16",
    clicks: 304,
    impressions: 7010,
    ctr: 4.34,
    position: 18.2,
  },
  {
    date: "2026-08-17",
    clicks: 319,
    impressions: 7260,
    ctr: 4.39,
    position: 17.7,
  },
  {
    date: "2026-08-18",
    clicks: 334,
    impressions: 7520,
    ctr: 4.44,
    position: 17.3,
  },
  {
    date: "2026-08-19",
    clicks: 326,
    impressions: 7415,
    ctr: 4.4,
    position: 17.5,
  },
  {
    date: "2026-08-20",
    clicks: 342,
    impressions: 7690,
    ctr: 4.45,
    position: 17.0,
  },
  {
    date: "2026-08-21",
    clicks: 361,
    impressions: 8010,
    ctr: 4.51,
    position: 16.5,
  },
];

export function SearchConsolePerformance() {
  return (
    <>
      <Card className="flex-1/12 space-y-4">
        <h4 className="heading-5">Search Console Performance</h4>
        <div className="grid w-full grid-cols-4 gap-2">
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Total Clicks</h3>
            <p className="metric-sm">24.6k</p>
            <ChangeIndicator className="-mt-4" direction="up" value={15.2} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Total Impressions</h3>
            <p className="metric-sm">1.05M</p>
            <ChangeIndicator className="-mt-4" direction="up" value={9.8} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Average CTR</h3>
            <p className="metric-sm">2.5%</p>
            <ChangeIndicator className="-mt-4" direction="up" value={4.3} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Average Position</h3>
            <p className="metric-sm">1.23</p>
            <ChangeIndicator className="-mt-4" direction="down" value={1.6} />
          </Card>
        </div>
        <TrendChart
          labels={googleSearchPerformance.map((data) =>
            new Date(data.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
          )}
          values={googleSearchPerformance.map((data) => data.clicks)}
          height={300}
          showXAxis
          showGrid
          showArea
        />
      </Card>
    </>
  );
}
