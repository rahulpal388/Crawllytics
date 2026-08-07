import { cn } from "../utils";

export type Column<T> = {
  key: keyof T;
  heading: string | null;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (value: T) => React.ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  className?: string;
  headerCellClassName?: string;
  cellClassName?: string;
};

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  className,
  headerCellClassName,
  cellClassName,
}: DataTableProps<T>) {
  return (
    <>
      <div
        className={cn(
          "overflow-hidden rounded-sm border-[0.3px] border-border-default shadow-md  ",
          className,
        )}
      >
        <table className="table-fixed w-full ">
          <thead className="bg-surface-muted">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  style={{ width: col.width }}
                  className={cn(
                    "h-14 px-6 text-xs uppercase tracking-wide font-semibold text-text-secondary border-b border-border-muted  ",
                    headerCellClassName,
                  )}
                >
                  {col.heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className=" px-6 align-middle border-b border-border-muted last:border-b-0  hover:bg-slate-50
transition-colors duration-150    "
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    style={{ width: col.width }}
                    className={cn("px-6 py-5 align-top", cellClassName)}
                  >
                    <div
                      className={cn(!col.render && "truncate whitespace-nowrap overflow-hidden")}
                    >
                      {col.render ? col.render(row) : String(row[col.key])}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
