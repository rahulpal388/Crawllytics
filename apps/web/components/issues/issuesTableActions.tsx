import { IssuesTableDataType } from "@repo/config/types/apiResponseType/issuesTypes";
import { Button } from "@repo/ui/components/button";

export function IssuesTableActions({ row }: { row: IssuesTableDataType }) {
  return (
    <>
      <Button size="sm" variant="outline">
        Fix Issues
      </Button>
    </>
  );
}
