"use client";
import { Button } from "@repo/ui/components/button";
import { Column, DataTable } from "@repo/ui/components/table";
import { ActionsTopIssues } from "./actionsTopIssues";
import { Card } from "@repo/ui/components/card/card";
import { useSelectedProjectId } from "../../store/useSelectedProjectId";
import { SeverityBadges } from "../badges/severityBadges";
import { useRouter } from "next/navigation";
import { SeverityType } from "@repo/config/types/apiResponseType/issuesTypes";

type IssueRow = {
  id: string;
  issue: string;
  severity: Exclude<SeverityType, "all">;
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
    render: (row) => <SeverityBadges severity={row.severity} />,
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
    severity: "critical",
    pages: 34,
    actions: null,
  },
  {
    id: "2",
    issue: "Duplicate Meta Descriptions",
    severity: "high",
    pages: 18,
    actions: null,
  },
  {
    id: "3",
    issue: "Missing Meta Descriptions",
    severity: "medium",
    pages: 25,
    actions: null,
  },
  {
    id: "4",
    issue: "Broken Internal Links",
    severity: "critical",
    pages: 12,
    actions: null,
  },
  {
    id: "5",
    issue: "Missing Canonical Tags",
    severity: "high",
    pages: 7,
    actions: null,
  },
];

export function TopIssuesSection() {
  const projectId = useSelectedProjectId((s) => s.projectId);
  const router = useRouter();
  return (
    <>
      <Card className="bg-surface-base">
        <div className="flex items-center justify-between gap-4 p-4">
          <h5 className="heading-5">Issue Overview</h5>
          <Button
            variant="ghost-icon"
            size="sm"
            onClick={() => {
              router.push(`/projects/${projectId}/issues`);
            }}
          >
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
