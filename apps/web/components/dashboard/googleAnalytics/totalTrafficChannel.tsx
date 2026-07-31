import { Card } from "@repo/ui/components/card/card";
import { DoughnutChart } from "@repo/ui/components/charts/pieChart";
import { IssueDistributionItem } from "@repo/ui/components/issueDistributionItems";

const TrafficDistributionData: {
  label: string;
  value: number;
  percentage: number;
  color: string;
}[] = [
  {
    label: "Organic Search",
    value: 12,
    percentage: 100,
    color: "#EF4444",
  },
  {
    label: "Direct",
    value: 34,
    percentage: 78,
    color: "#F97316",
  },
  {
    label: "Referral",
    value: 67,
    percentage: 52,
    color: "#EAB308",
  },
  {
    label: "Social",
    value: 121,
    percentage: 24,
    color: "#22C55E",
  },
];

const pieChartData = [
  {
    label: "Organic Search",
    value: 12,
    color: "#EF4444",
  },
  {
    label: "Direct",
    value: 34,
    color: "#F97316",
  },
  {
    label: "Referral",
    value: 67,
    color: "#EAB308",
  },
  {
    label: "Social",
    value: 121,
    color: "#22C55E",
  },
];

export function TotalTrafficChannel() {
  return (
    <>
      <Card className="flex-1 space-y-4">
        <h4 className="heading-6">Total Traffic Channel</h4>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          {/* Pie Chart */}
          <div className="flex justify-center lg:w-52 lg:flex-shrink-0">
            <DoughnutChart
              className="h-60 w-60"
              data={pieChartData}
              center="123 Totals"
              borderRadius={2}
            />
          </div>

          {/* Distribution */}
          <div className="flex flex-1 flex-col gap-3">
            {TrafficDistributionData.map((item) => (
              <IssueDistributionItem
                key={item.label}
                label={item.label}
                value={item.value}
                percentage={item.percentage}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}
