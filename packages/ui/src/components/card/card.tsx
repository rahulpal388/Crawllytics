import { cn } from "../../utils";

import react from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-md border border-border-muted bg-surface-base shadow-sm p-4  ",
        className,
      )}
    >
      {children}
    </div>
  );
}
