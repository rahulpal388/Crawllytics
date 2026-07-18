import { cn } from "../utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(`mx-auto max-w-9xl ml-4 md:ml-8 sm:px-6 lg:px-8`, className)}>
      {children}
    </div>
  );
}
