import { IssueDistributionItem } from "@repo/ui/components/issueDistributionItems";

const websiteHealthDistributionData: {
  label: string;
  value: number;
  percentage: number;
}[] = [
  {
    label: "Metadata",
    value: 94,
    percentage: 94,
  },
  {
    label: "Content",
    value: 86,
    percentage: 86,
  },
  {
    label: "Performance",
    value: 72,
    percentage: 72,
  },
  {
    label: "Internal Links",
    value: 91,
    percentage: 91,
  },
  {
    label: "Structured Data",
    value: 58,
    percentage: 58,
  },
  {
    label: "Accessibility",
    value: 84,
    percentage: 84,
  },
  {
    label: "Security",
    value: 100,
    percentage: 100,
  },
];

export function WebsiteHealthDistribution() {
  return (
    <>
      <div className="border-border-muted bg-surface-base flex flex-1 flex-col gap-2 rounded-md border p-4 shadow-sm">
        <h6 className="heading text-xl">Website Health Distribution</h6>
        <div className="flex flex-col gap-2">
          {websiteHealthDistributionData.map((item, index) => (
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
    </>
  );
}
