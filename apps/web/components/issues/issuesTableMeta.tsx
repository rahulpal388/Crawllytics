import { IssuesTableDataType } from "@repo/config/types/apiResponseType/issuesTypes";

export function IssuesTableMeta({ row }: { row: IssuesTableDataType }) {
  return (
    <>
      <div className="flex flex-col">
        <p className="body-sm">{row.issues.title}</p>
        <p className="caption-xs">{row.issues.description}</p>
      </div>
    </>
  );
}
