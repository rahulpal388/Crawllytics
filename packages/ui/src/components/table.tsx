import { cn } from "../utils";

type Column<T> = {
  key: keyof T;
  heading: string;
  render?: (value: T[keyof T]) => React.ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export function DataTable<T extends { id: string | number }>({ data, columns }: DataTableProps<T>) {
  return (
    <>
      <table
        className={cn(
          "w-full border-collapse border border-border rounded-lg overflow-hidden shadow-md ",
        )}
      >
        <thead className="  bg-background-light   ">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="p-3 text-left">
                {col.heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className=" border-b  ">
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)} className="p-3">
                  {col.render ? col.render(row[col.key]) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
