import { type JSX } from "react";
import { cn } from "../utils";

export function Card({
  className,
  title,
  value,
  // children,
  // href,
}: {
  className?: string;
  title: string;
  value: string;
  // children: React.ReactNode;
  // href: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-md border border-border-muted bg-surface-base shadow-sm p-4 w-full h-28 ",
        className,
      )}
    >
      <h6 className="text-text-primary text-lg">{title}</h6>
      <p className="subHeading text-sm">{value}</p>
    </div>
  );
}
