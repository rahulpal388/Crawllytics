import { X } from "lucide-react";
import { cn } from "../../utils";
import { Overlay } from "./overlay";
import { motion } from "framer-motion";
import { Button } from "../button";

export function Drawer({
  children,
  onClose,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  containerClassName?: string;
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

          className={cn(" relative h-full overflow-auto py-4  bg-white shadow-xl ", className)}
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="ghost" onClick={onClose} className="absolute top-4 right-4">
            <X size={26} className="stroke-text-secondary" />
          </Button>
          <div className={cn("flex-1   px-6 h-full ", containerClassName)}>{children}</div>
        </motion.div>
      </div>
    </Overlay>
  );
}
