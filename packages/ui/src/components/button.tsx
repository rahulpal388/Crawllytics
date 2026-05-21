"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

type BtnVariants = "primary" | "secondary" | "outline" | "destructive"

const variants: Record<BtnVariants, string> = {
  primary: " bg-[#0D9488]  hover:bg-[#0D9488]/90 ",
  secondary: " bg-black hover:bg-black/85 ",
  outline: "  text-black  hover:opacity-90 ",
  destructive: " bg-danger hover:bg-danger/90 "
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;

  variant: BtnVariants
}

export const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn("  cursor-pointer  border border-border   shadow-2xs  px-4 py-1 rounded-lg text-background-light flex gap-2 items-center justify-center ", variants[variant], className)}
    >
      {children}
    </button>
  );
};
