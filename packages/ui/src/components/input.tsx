import { forwardRef } from "react";
import { cn } from "../utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon, endIcon, className, containerClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-12 w-full items-center gap-2 rounded-xs border border-border-default bg-surface-base focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-primary-hover px-2   ",
          containerClassName,
        )}
      >
        {startIcon && (
          <span className="text-text-secondary flex shrink-0 items-center   ">{startIcon}</span>
        )}

        <input
          ref={ref}
          {...props}
          className={cn(
            "h-full flex-1 bg-transparent outline-none placeholder:text-text-secondary",
            className,
          )}
        />

        {endIcon && (
          <span className="text-text-secondary flex shrink-0 items-center ">{endIcon}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
