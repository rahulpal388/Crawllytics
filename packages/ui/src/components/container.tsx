import { cn } from "../utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(`mx-auto max-w-7xl pl-20 sm:px-6 lg:px-8`, className)}>
      {children}
    </div>
  );
}
