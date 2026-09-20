import { Triangle } from "lucide-react";
import { cn } from "../../utils";

type ChangeIndicatorProps = {
  value: number;
  direction: "up" | "down";
  label?: string;
  className?: string;
};

export function ChangeIndicator({ value, direction, label, className }: ChangeIndicatorProps) {
  return (
    <>
      <div
        className={cn(
          `flex items-center h-12 gap-2 text-sm ${direction == "up" ? "text-green-600" : "text-red-600"} `,
          className,
        )}
      >
        <Triangle
          size={12}
          className={`stroke-0 h-full ${direction === "up" ? "fill-green-600" : "fill-red-600 rotate-180 "}`}
        />
        <p className="font-bold">{value}%</p>
        {label && <p className=" text-xs text-text-secondary">{label}</p>}
      </div>
    </>
  );
}
