import { Card } from "@repo/ui/components/card/card";
import { TrendChart } from "@repo/ui/components/charts/trendChart";

export const usersOverTime = [
  { date: "2026-07-23", users: 470 },
  { date: "2026-07-24", users: 495 },
  { date: "2026-07-25", users: 560 },
  { date: "2026-07-26", users: 590 },
  { date: "2026-07-27", users: 565 },
  { date: "2026-07-28", users: 640 },
  { date: "2026-07-29", users: 645 },
  { date: "2026-07-30", users: 700 },
  { date: "2026-07-31", users: 670 },
  { date: "2026-08-01", users: 620 },
  { date: "2026-08-02", users: 615 },
  { date: "2026-08-03", users: 520 },
  { date: "2026-08-04", users: 555 },
  { date: "2026-08-05", users: 590 },
  { date: "2026-08-06", users: 630 },
  { date: "2026-08-07", users: 615 },
  { date: "2026-08-08", users: 645 },
  { date: "2026-08-09", users: 670 },
  { date: "2026-08-10", users: 690 },
  { date: "2026-08-11", users: 790 },
  { date: "2026-08-12", users: 760 },
  { date: "2026-08-13", users: 735 },
  { date: "2026-08-14", users: 750 },
  { date: "2026-08-15", users: 715 },
  { date: "2026-08-16", users: 700 },
  { date: "2026-08-17", users: 820 },
  { date: "2026-08-18", users: 860 },
  { date: "2026-08-19", users: 810 },
  { date: "2026-08-20", users: 835 },
  { date: "2026-08-21", users: 920 },
];

export function UserOverTime() {
  return (
    <>
      <Card className="flex-1 space-y-4">
        <h4 className="heading-6">User Over Time</h4>
        <TrendChart
          labels={usersOverTime.map((data) =>
            new Date(data.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
          )}
          values={usersOverTime.map((data) => data.users)}
          height={200}
          showXAxis
          showGrid
          showArea
        />
      </Card>
    </>
  );
}
