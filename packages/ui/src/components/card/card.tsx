import { cn } from "../../utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn("rounded-md border border-border-muted bg-surface-base shadow-sm", className)}
    >
      {children}
    </div>
  );
}
