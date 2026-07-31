import { cn } from "../../utils";
import { Overlay } from "./overlay";

export function Dialog({
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
      <div className="flex h-full items-center justify-center">
        <div
          className={cn("rounded-lg bg-white shadow-xl", className)}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}
