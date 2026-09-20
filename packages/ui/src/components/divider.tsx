import { cn } from "../utils";

export function Divider({
  className,
  dividerName = "OR",
}: {
  className?: string;
  dividerName?: string;
}) {
  return (
    <>
      <div className={cn("bg-border-muted h-px flex-1", className)} />
      <span className="text-text-secondary text-xs font-medium tracking-wider uppercase">
        {dividerName}
      </span>
      <div className="bg-border-muted h-px flex-1" />
    </>
  );
}
