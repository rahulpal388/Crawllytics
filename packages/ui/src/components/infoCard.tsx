import { cn } from "../utils";

export function InfoCard({
  className,
  title,
  value,
}: {
  className?: string;
  title: string;
  value: number;
}) {
  return (
    <>
      <div
        className={cn(
          "bg-background-light w-36 h-28 flex  flex-col items-center justify-center border border-border shadow-xl rounded-lg",
          className,
        )}
      >
        <h2 className=" text-lg font-semibold  ">{title}</h2>
        <p className=" text-xl  ">{value}</p>
      </div>
    </>
  );
}
