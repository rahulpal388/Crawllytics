import { cn } from "../utils";

type StatusVariants = "success" | "pending" | "completed" | "failed" | "running";

type StatusProps = {
  variant: StatusVariants;
  className?: string;
};

const status = {
  success: "bg-green-600 text-white",
  pending: "bg-yellow-500 text-white",
  completed: "bg-blue-500 text-white",
  failed: "bg-red-500 text-white",
  running: "bg-purple-500 text-white",
};

export function Status({ variant, className }: StatusProps) {
  return (
    <>
      <div
        className={cn(
          `flex items-center justify-center px-2 py-px w-fit rounded-full ${status[variant]} text-xs`,
          className,
        )}
      >
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </div>
    </>
  );
}
