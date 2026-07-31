import { X } from "lucide-react";
import { cn } from "../../utils";
import { Overlay } from "./overlay";
import { motion } from "framer-motion";
import { Button } from "../button";

export function Drawer({
  children,
  onClose,
  className,
}: {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}) {
  return (
    <Overlay onClose={onClose}>
      <div className="flex h-full justify-end">
        <motion.div
          initial={{
            x: "100%",
            opacity: 0,
          }}

          animate={{
            x: 0,
            opacity: 1,
          }}

          transition={{
            ease: "easeOut",
            duration: 0.3,
          }}

          className={cn("  h-full bg-white shadow-xl ", className)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" flex p-4 items-center justify-end gap-2 ">
            <Button variant="outline" onClick={onClose}>
              <X size={28} />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-6">{children}</div>
        </motion.div>
      </div>
    </Overlay>
  );
}
