"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "../card/card";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";

export interface SelectOptionsType<T extends string | number> {
  label: string;
  id: T;
}

interface SelectProps<T extends string | number> {
  value: T;
  onValueChange: (currentValue: T) => void;
  options: SelectOptionsType<T>[];
  title: string | null;
  className?: string;
}

export function Select<T extends string | number>({
  className,
  value,
  onValueChange,
  options,
  title,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<"top" | "bottom">("bottom");

  const ref = useRef<HTMLDivElement>(null);

  const calculatePlacement = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    const dropdownHeight = Math.min(options.length * 40, 256);

    if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
      setPlacement("top");
    } else {
      setPlacement("bottom");
    }
  };

  const handleOpen = () => {
    if (!isOpen) {
      calculatePlacement();
    }

    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handlePositionChange = () => {
      calculatePlacement();
    };

    document.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("resize", handlePositionChange);

    window.addEventListener("scroll", handlePositionChange, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("resize", handlePositionChange);

      window.removeEventListener("scroll", handlePositionChange, true);
    };
  }, [isOpen, options.length]);

  return (
    <Card
      ref={ref}
      className={cn(
        "relative w-fit max-w-48 p-4 cursor-pointer",
        isOpen && "bg-surface-base ",
        className,
      )}
      onClick={handleOpen}
    >
      <div className="flex  items-center justify-between space-x-2">
        {title && <span>{title}</span>}

        <p className="truncate body-sm font-medium">{value}</p>

        <ChevronDown
          size={20}
          strokeWidth={1.6}
          className={cn(
            "stroke-text-secondary transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              "absolute left-0 z-50 w-full overflow-y-auto bg-white shadow-md max-h-64",
              placement === "bottom" ? "top-full mt-2" : "bottom-full mb-2",
            )}
            initial={{
              opacity: 0,
              scale: 0.98,
              y: placement === "bottom" ? -4 : 4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: placement === "bottom" ? -4 : 4,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                className={cn(
                  "flex h-10 cursor-pointer items-center rounded-md px-3 text-sm transition-colors",
                  value === opt.id
                    ? "bg-orange-50 font-medium text-orange-600"
                    : "hover:bg-surface-muted",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
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
  );
}
