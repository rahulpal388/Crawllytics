import { StatusType } from "@repo/config/types/apiResponseType/issuesTypes";

const statusItems: Record<
  Exclude<StatusType, "all">,
  {
    label: string;
    bgColor: string;
    textColor: string;
  }
> = {
  open: {
    label: "Open",
    bgColor: "bg-red-100",
    textColor: "text-red-500",
  },
  closed: {
    label: "Closed",
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  "in-progress": {
    label: "In Progress",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
  },
};

export function StatusBadge({
  status,
}: {
  status: Exclude<StatusType, "all">;
}) {
  return (
    <>
      <div
        className={`${statusItems[status].bgColor} w-fit rounded-md px-4 py-[1.6px] text-sm ${statusItems[status].textColor} `}
      >
        {statusItems[status].label}
      </div>
    </>
  );
}
