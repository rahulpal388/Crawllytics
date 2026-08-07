type BadgesType = "success" | "warning" | "error" | "info";

type BadgesProps = {
  text: string;
  type: BadgesType;
  className?: string;
};

const badgeClasses = {
  success: "bg-green-700 text-green-100",
  warning: "bg-yellow-700 text-yellow-100",
  error: "bg-red-700 text-red-100",
  info: "bg-blue-700 text-blue-100",
};

export function Badges({ text, type, className }: BadgesProps) {
  return (
    <span className={`rounded-lg p-2 text-xs ${badgeClasses[type]} ${className || ""}`}>
      {text}
    </span>
  );
}
