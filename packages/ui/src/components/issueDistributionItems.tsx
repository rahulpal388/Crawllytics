import { cn } from "../utils";
import { ChangeIndicator } from "./charts/changeIndicator";

type IssueDistributionItemProps = {
  label: string;
  value: number;
  percentage: number;
  color: string;
  className?: string;
};

export function IssueDistributionItem({
  label,
  value,
  percentage,
  color,
  className,
}: IssueDistributionItemProps) {
  return (
    <>
      <div className={cn("grid grid-cols-[1fr_100px] items-center  gap-4 py-2", className)}>
        <div className="flex items-center gap-4">
          <div className={` h-4 w-4 rounded-full`} style={{ backgroundColor: color }} />
          <p className="subHeading text-sm  whitespace-nowrap">{label}</p>
        </div>
        <div className="flex items-center gap-4  ">
          <p className="subHeading text-sm">{value}</p>
          <p className="subHeading text-sm text-muted-foreground">({percentage}%)</p>
          {/* <ChangeIndicator value={percentage} direction="up" className="text-xs" /> */}
        </div>
      </div>
    </>
  );
}
