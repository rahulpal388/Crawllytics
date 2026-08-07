import { SeverityType } from "@repo/config/types/apiResponseType/issuesTypes";

const severityItems: Record<
  Exclude<SeverityType, "all">,
  {
    label: string;
    bgColor: string;
    labelColor: string;
  }
> = {
  critical: {
    label: "Critical",
    bgColor: "var(--color-severity-critical-bg)",
    labelColor: "var(--color-severity-critical)",
  },

  high: {
    label: "High",
    bgColor: "var(--color-severity-high-bg)",
    labelColor: "var(--color-severity-high)",
  },

  medium: {
    label: "Medium",
    bgColor: "var(--color-severity-medium-bg)",
    labelColor: "var(--color-severity-medium)",
  },

  low: {
    label: "Low",
    bgColor: "var(--color-severity-low-bg)",
    labelColor: "var(--color-severity-low)",
  },
};

export function SeverityBadges({
  severity,
}: {
  severity: Exclude<SeverityType, "all">;
}) {
  const sev = severityItems[severity];
  return (
    <>
      <div
        className="caption w-fit rounded-lg px-4 py-[1.6px]"
        style={{
          backgroundColor: sev.bgColor,
          color: sev.labelColor,
        }}
      >
        {sev.label}
      </div>
    </>
  );
}
