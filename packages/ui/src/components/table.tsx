import { cn } from "../utils";

export type Column<T> = {
  key: keyof T;
  heading: string | null;
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
                  className={cn(
                    "h-12 px-6 text-left align-middle border-b border-border-muted font-bold subHeading ",
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
                className=" px-6 align-middle border-b border-border-muted last:border-b-0  hover:bg-surface-muted   "
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className={cn("p-3 text-sm  ", cellClassName)}>
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
