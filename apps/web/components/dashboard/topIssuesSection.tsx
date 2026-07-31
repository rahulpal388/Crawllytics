import { Button } from "@repo/ui/components/button";
import { Column, DataTable } from "@repo/ui/components/table";
import { ActionsTopIssues } from "./actionsTopIssues";
import { Card } from "@repo/ui/components/card/card";

type IssueRow = {
  id: string;
  issue: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  pages: number;
  actions: null;
};

export const issueColumns: Column<IssueRow>[] = [
  {
    key: "issue",
    heading: "Issue",
  },
  {
    key: "severity",
    heading: "Severity",
  },
  {
    key: "pages",
    heading: "Pages",
  },
  {
    key: "actions",
    heading: "Actions",
    render: () => <ActionsTopIssues />,
  },
];

export const issueData: IssueRow[] = [
  {
    id: "1",
    issue: "Missing Title Tags",
    severity: "Critical",
    pages: 34,
    actions: null,
  },
  {
    id: "2",
    issue: "Duplicate Meta Descriptions",
    severity: "High",
    pages: 18,
    actions: null,
  },
  {
    id: "3",
    issue: "Missing Meta Descriptions",
    severity: "Medium",
    pages: 25,
    actions: null,
  },
  {
    id: "4",
    issue: "Broken Internal Links",
    severity: "Critical",
    pages: 12,
    actions: null,
  },
  {
    id: "5",
    issue: "Missing Canonical Tags",
    severity: "High",
    pages: 7,
    actions: null,
  },
];

export function TopIssuesSection() {
  return (
    <>
      <Card className="bg-surface-base">
        <div className="flex items-center justify-between gap-4 p-4">
          <h5 className="heading-5">Issue Overview</h5>
          <Button variant="ghost-icon" size="sm">
            View All Issues
          </Button>
        </div>
        <div className="mt-4 w-full">
          <DataTable
            data={issueData}
            columns={issueColumns}
            className="rounded-[0px] shadow-xs"
          />
        </div>
        <div className="flex items-center justify-center gap-4 p-4">
          <p className="subHeading text-xs">Showing 5 of 24</p>
        </div>
      </Card>
    </>
  );
}
