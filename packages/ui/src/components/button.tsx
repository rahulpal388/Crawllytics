"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

type BtnVariants = "primary" | "secondary" | "outline";

const variants: Record<
  BtnVariants,
  React.HTMLAttributes<HTMLButtonElement>["className"]
> = {
  primary:
    " bg-primary  hover:bg-primary-hover active:bg-primary-active text-white ",
  secondary: " bg-text-primary  hover:bg-black/90 text-white  ",
  outline: "  text-text-primary bg-surface-base  hover:bg-surface-muted  ",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;

  variant: BtnVariants;
}

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "  cursor-pointer  border border-border-muted   shadow-sm  px-4 py-1 rounded-xs text-text-primary flex gap-2 items-center justify-center  ",
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
