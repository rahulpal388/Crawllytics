import { motion, AnimatePresence } from "motion/react";
import { NavBarItems } from "./navBarItems";
import { NavBarButtons } from "./navBarButtons";

export function NavDropDown({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-surface-muted border-border-muted absolute top-14 right-0 z-50 w-full overflow-hidden border-b-2 py-4 shadow-lg"
          >
            <NavBarItems className="flex-col items-start gap-0" />

            <NavBarButtons className="border-border-default mt-4 justify-normal border-t px-12 pt-4 sm:gap-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
