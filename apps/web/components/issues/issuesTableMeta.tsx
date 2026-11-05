import { IssuesResponseType } from "@repo/contracts/apiContracts/apiResponse/issuesTypes";

export function IssuesTableMeta({ row }: { row: IssuesResponseType }) {
  return (
    <>
      <div className="flex flex-col">
        <p className="body-sm">{row.issues.title}</p>
        <p className="caption-xs">{row.issues.description}</p>
      </div>
    </>
  );
}
