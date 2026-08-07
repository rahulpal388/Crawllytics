"use client";
import { useEffect, useRef, useState } from "react";
import { Card } from "./card/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../utils";
import { motion, AnimatePresence } from "framer-motion";

export interface SelectOptionsType<T extends string> {
  label: string;
  id: T;
}

interface SelectProps<T extends string> {
  value: T;
  onValueChange: (currentValue: T) => void;
  options: SelectOptionsType<T>[];
  title: string | null;
  className?: string;
}

export function Select<T extends string>({
  className,
  value,
  onValueChange,
  options,
  title,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <>
      <Card
        ref={ref}
        className={cn("relative w-fit p-2  max-w-48 ", isOpen && "bg-surface-base", className)}
      >
        <div
          className="flex items-center justify-between space-x-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-1 items-center gap-2 min-w-0">
            {title && <p className="body-sm shrink-0 font-medium ">{title}</p>}

            <p className="truncate caption font-medium">{value}</p>
          </div>
          <ChevronDown
            size={20}
            strokeWidth={1.6}
            className={cn("transition-transform duration-200", isOpen && "rotate-180")}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute  bg-white  left-0 top-full z-50 mt-2 w-full shadow-md  max-h-64 overflow-y-auto  "

              initial={{
                opacity: 0,
                y: -4,
                scale: 0.98,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: -4,
                scale: 0.98,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {options.map((opt) => (
                <div
                  key={opt.id}

                  className={cn(
                    "flex h-10 items-center rounded-md px-3 text-sm transition-colors cursor-pointer  ",

                    value === opt.id
                      ? "bg-orange-50 text-orange-600 font-medium"
                      : "hover:bg-surface-muted",
                  )}
                  onClick={() => {
                    onValueChange(opt.id);
                    setIsOpen(false);
                  }}
                >
                  {opt.label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </>
  );
}
