import { cn } from "../utils";

export function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(" border-2 border-surface-muted shadow-sm rounded-sm  ", className)}>
      {children}
    </div>
  );
}
