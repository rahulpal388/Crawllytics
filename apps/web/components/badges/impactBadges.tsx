import { ImpactType } from "@repo/config/types/apiResponseType/issuesTypes";

const impactBadges: Record<
  Exclude<ImpactType, "all">,
  {
    label: string;
    bgColor: string;
  }
> = {
  high: {
    label: "High",
    bgColor: "bg-red-500",
  },
  medium: {
    label: "Medium",
    bgColor: "bg-yellow-500",
  },
  low: {
    label: "Low",
    bgColor: "bg-green-500",
  },
};

export function ImpactBadges({
  impact,
}: {
  impact: Exclude<ImpactType, "all">;
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div
          className={`${impactBadges[impact].bgColor} size-3 rounded-full`}
        />
        <span className="caption">{impactBadges[impact].label}</span>
      </div>
    </>
  );
}
