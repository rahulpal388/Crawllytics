"use client";
import { IssueDistributionItem } from "@repo/ui/components/issueDistributionItems";
import { Card } from "@repo/ui/components/card/card";
import { DoughnutChart } from "@repo/ui/components/charts/doughnutChart";
import { Button } from "@repo/ui/components/button";
import { useSelectedProjectId } from "../../store/useSelectedProjectId";
import { useRouter } from "next/navigation";

const issueDistributionData: {
  label: string;
  value: number;
  percentage: number;
  color: string;
}[] = [
  {
    label: "Critical",
    value: 12,
    percentage: 100,
    color: "#EF4444",
  },
  {
    label: "High",
    value: 34,
    percentage: 78,
    color: "#F97316",
  },
  {
    label: "Medium",
    value: 67,
    percentage: 52,
    color: "#EAB308",
  },
  {
    label: "Low",
    value: 121,
    percentage: 24,
    color: "#22C55E",
  },
];

const pieChartData = [
  {
    label: "Critical",
    value: 12,
    color: "#EF4444",
  },
  {
    label: "High",
    value: 34,
    color: "#F97316",
  },
  {
    label: "Medium",
    value: 67,
    color: "#EAB308",
  },
  {
    label: "Low",
    value: 121,
    color: "#22C55E",
  },
];

export function IssuesDistribution() {
  const projectId = useSelectedProjectId((s) => s.projectId);
  const router = useRouter();
  return (
    <Card className="flex-1 space-y-6 p-4">
      <h3 className="heading-5">Issues Distribution</h3>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        {/* Pie Chart */}
        <div className="flex justify-center lg:w-52 lg:flex-shrink-0">
          <DoughnutChart
            className="h-40 w-40"
            data={pieChartData}
            center="123 Totals"
            borderRadius={2}
          />
        </div>

        {/* Distribution */}
        <div className="divide-surface-muted flex flex-1 flex-col gap-4 divide-y-2">
          {issueDistributionData.map((item) => (
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
      <Button
        variant="outline"
        size="md"
        onClick={() => {
          router.push(`/projects/${projectId}/issues`);
        }}
      >
        View all issues
      </Button>
    </Card>
  );
}
