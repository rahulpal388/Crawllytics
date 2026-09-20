import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropDownProps = {
  title: string;
  sideText: string | null;
  titleSideText: string | null;
  children: React.ReactNode;
};

export function DropDown({ title, sideText, titleSideText, children }: DropDownProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <div
          className="flex items-center justify-between gap-2 cursor-pointer pb-6"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
            <ChevronDown size={14} className={`${open ? "rotate-180" : "rotate-0"}`} />
            <p className="body font-semibold ">
              {title} <span className="caption-md font-light ">({titleSideText})</span>
            </p>
          </div>
          {sideText && (
            <div className="border border-border-muted rounded-lg bg-surface-base shadow-sm px-4 py-px caption-xs  ">
              {sideText}
            </div>
          )}
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}

              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}

              className="flex flex-col gap-4 mt-2 p-4  overflow-hidden "
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
