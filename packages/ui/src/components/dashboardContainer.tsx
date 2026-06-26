import { cn } from "../utils";

export function DashboardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("h-full w-full  gap-4 overflow-y-auto p-8", className)}>
      {children}
    </div>
  );
}
