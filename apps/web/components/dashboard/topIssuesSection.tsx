import { Button } from "@repo/ui/components/button";
import { Column, DataTable } from "@repo/ui/components/table";

type IssueRow = {
  id: string;
  issue: string;
  severity: "critical" | "high" | "medium" | "low";
  pages: number;
  "view-pages": null;
  "view-issue": null;
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
    key: "view-pages",
    heading: null,
    render: () => <Button variant="outline">View Pages</Button>,
  },
  {
    key: "view-issue",
    heading: null,
    render: () => <Button variant="outline">How to Fix</Button>,
  },
];

export const issueData: IssueRow[] = [
  {
    id: "1",
    issue: "Missing Title Tags",
    severity: "critical",
    pages: 34,
    "view-pages": null,
    "view-issue": null,
  },
  {
    id: "2",
    issue: "Duplicate Meta Descriptions",
    severity: "high",
    pages: 18,
    "view-pages": null,
    "view-issue": null,
  },
  {
    id: "3",
    issue: "Missing Meta Descriptions",
    severity: "medium",
    pages: 25,
    "view-pages": null,
    "view-issue": null,
  },
  {
    id: "4",
    issue: "Broken Internal Links",
    severity: "critical",
    pages: 12,
    "view-pages": null,
    "view-issue": null,
  },
  {
    id: "5",
    issue: "Missing Canonical Tags",
    severity: "high",
    pages: 7,
    "view-pages": null,
    "view-issue": null,
  },
];

export function TopIssuesSection() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between gap-4">
          <h5 className="heading text-xl">Top Issues</h5>
          <Button variant="outline"> View All Issues </Button>
        </div>
        <div className="mt-6">
          <DataTable data={issueData} columns={issueColumns} />
        </div>
      </div>
    </>
  );
}
