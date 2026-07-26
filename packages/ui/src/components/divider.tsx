export function Divider({
  className,
  dividerName = "OR",
}: {
  className?: string;
  dividerName?: string;
}) {
  return (
    <>
      <div className="bg-border-muted h-px flex-1" />
      <span className="text-text-secondary text-xs font-medium tracking-wider uppercase">
        {dividerName}
      </span>
      <div className="bg-border-muted h-px flex-1" />
    </>
  );
}
