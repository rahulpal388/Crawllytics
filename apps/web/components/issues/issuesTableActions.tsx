import { IssuesResponseType } from "@repo/contract/types/apiResponseType/issuesTypes";
import { Button } from "@repo/ui/components/button";
import { useDrawerStore } from "../../store/drawerStore";

export function IssuesTableActions({ row }: { row: IssuesResponseType }) {
  const openDrawer = useDrawerStore((s) => s.openDrawer);
  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          openDrawer({
            type: "fix-issues",
            param: {
              fixIssuesId: row.id,
            },
          });
        }}
      >
        Fix Issues
      </Button>
    </>
  );
}
