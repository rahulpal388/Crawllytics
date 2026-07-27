import { IssueDistributionItem } from "@repo/ui/components/issueDistributionItems";

const issueDistributionData: {
  label: string;
  value: number;
  percentage: number;
}[] = [
  {
    label: "Critical",
    value: 12,
    percentage: 100,
  },
  {
    label: "High",
    value: 34,
    percentage: 78,
  },
  {
    label: "Medium",
    value: 67,
    percentage: 52,
  },
  {
    label: "Low",
    value: 121,
    percentage: 24,
  },
];

export function IssuesDistribution() {
  return (
    <div className="border-border-muted bg-surface-base flex h-fit flex-1 flex-col gap-2 rounded-md border p-4 shadow-sm">
      <h6 className="heading text-xl">Issues Distribution</h6>
      <div className="flex flex-col gap-2">
        {issueDistributionData.map((item, index) => (
          <IssueDistributionItem
            key={index}
            label={item.label}
            value={item.value}
            percentage={item.percentage}
            color="red-500"
          />
        ))}
      </div>
    </div>
  );
}
