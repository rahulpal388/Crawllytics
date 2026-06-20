import { cn } from "../utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Input({ className, children, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full h-12 border-[0.8px] border-border-default rounded-xs overflow-hidden flex gap-1 justify-between pl-2 py-px bg-surface-base outline-primary-hover focus:outline-2 focus:outline-offset-1 focus:outline-primary-hover",
        className,
      )}
    >
      {children}
    </input>
  );
}
