"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";
import { MoveRight } from "lucide-react";

type BtnVariants =
  "primary" | "secondary" | "outline" | "accent-outline" | "ghost" | "ghost-icon" | "disable";

type ButtonSize = "sm" | "md" | "lg";

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-lg",
};

const variants: Record<BtnVariants, React.HTMLAttributes<HTMLButtonElement>["className"]> = {
  primary: " bg-primary  hover:bg-primary-hover active:bg-primary-active text-white ",
  secondary: " bg-text-primary  hover:bg-black/90 text-white  ",
  outline: "  text-text-primary bg-surface-base  hover:bg-surface-muted  ",
  "accent-outline":
    "  text-primary bg-surface-base  hover:bg-surface-muted border border-primary  ",
  ghost: "  text-text-primary hover:opacity-80   ",
  "ghost-icon": "  text-primary hover:opacity-80   ",
  disable: "opacity-50 cursor-not-allowed ",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant: BtnVariants;
  size?: ButtonSize;
}

export const Button = ({ children, className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        " cursor-pointer  px-4 py-1 rounded-xs text-text-primary flex gap-2 items-center justify-center      ",
        variant !== "ghost-icon" && variant !== "ghost" && "shadow-sm  border border-border-muted ",
        variants[variant],
        sizes[size || "sm"],
        className,
      )}
    >
      {children}
      {variant === "ghost-icon" && (
        <MoveRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  );
};
