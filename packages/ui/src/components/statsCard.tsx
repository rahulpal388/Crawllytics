import { cn } from "../utils";

type StatsCardProps = {
  value: string;
  title: string;
  className?: string;
};

export function StatsCard({ value, title, className }: StatsCardProps) {
  return (
    <>
      <div className={cn("  flex flex-col items-center justify-center  ", className)}>
        <h3 className="xs:text-5xl text-2xl font-light text-orange-600">{value}</h3>
        <p className="font-mono text-gray-500 uppercase tracking-wide xs:text-lg text-sm  ">
          {title}
        </p>
      </div>
    </>
  );
}
