"use client";
import { useEffect, useState } from "react";
import { IssuesFilter, IssuesFilterActions } from "./issuesFilterActions";
import { DataTable, Column } from "@repo/ui/components/table";
import { IssuesTableMeta } from "./issuesTableMeta";
import { IssuesTableDataType } from "@repo/config/types/apiResponseType/issuesTypes";
import { SeverityBadges } from "../badges/severityBadges";
import { CategoryBadges } from "../badges/categoryBages";
import { ImpactBadges } from "../badges/impactBadges";
import { StatusBadge } from "../badges/statusBadge";
import { IssuesTableActions } from "./issuesTableActions";
import { Card } from "@repo/ui/components/card/card";
import { IssuesPagination } from "./issuesPagination";
import { Select } from "@repo/ui/components/select";
import { issuesData } from "./issuesTempData";
const ColumnsType: Column<IssuesTableDataType>[] = [
  {
    key: "issues",
    heading: "Issue",
    width: "34%",
    render: (row) => <IssuesTableMeta row={row} />,
  },
  {
    key: "severity",
    heading: "Severity",
    width: "11%",
    render: (row) => <SeverityBadges severity={row.severity} />,
  },
  {
    key: "category",
    heading: "Category",
    width: "13%",
    render: (row) => <CategoryBadges category={row.category} />,
  },
  {
    key: "affectedPages",
    heading: "Affected Pages",
    width: "10%",
  },
  {
    key: "impact",
    heading: "Impact",
    width: "12%",
    render: (row) => <ImpactBadges impact={row.impact} />,
  },
  {
    key: "status",
    heading: "Status",
    width: "10%",
    render: (row) => <StatusBadge status={row.status} />,
  },
  {
    key: "actions",
    heading: "Actions",
    width: "12%",
    render: (row) => <IssuesTableActions row={row} />,
  },
];

export function IssuesTable() {
  const [selected, setSelected] = useState<IssuesFilter>({
    severity: "all",
    category: "all",
    status: "all",
    impact: "all",
  });
  const [rowsPerPage, setRowsPerPage] = useState<"5" | "10" | "15" | "20">(
    "10",
  );
  const [data, setData] = useState<IssuesTableDataType[]>(issuesData);

  (useEffect(() => {
    const filteredData = issuesData.filter((issue) => {
      const severityMatch =
        selected.severity === "all" || issue.severity === selected.severity;
      const categoryMatch =
        selected.category === "all" || issue.category === selected.category;
      const statusMatch =
        selected.status === "all" || issue.status === selected.status;
      const impactMatch =
        selected.impact === "all" || issue.impact === selected.impact;
      return severityMatch && categoryMatch && statusMatch && impactMatch;
    });
    setData(filteredData);
  }),
    [selected]);

  return (
    <>
      <div className="space-y-4">
        <IssuesFilterActions selected={selected} setSelected={setSelected} />
        <Card className="space-y-4">
          <DataTable
            columns={ColumnsType}
            data={data}
            className="-mx-4 -mt-4 rounded shadow-none"
          />
          <div className="flex items-center justify-between gap-8">
            <p className="caption-xs">showing 10 of 100 issues</p>
            <IssuesPagination />
            <div className="flex items-center gap-4">
              <p className="body-sm">Rows:</p>
              <Select
                value={rowsPerPage}
                onValueChange={(value) => setRowsPerPage(value)}
                options={[
                  {
                    id: "5",
                    label: "5",
                  },
                  {
                    id: "10",
                    label: "10",
                  },
                  {
                    id: "15",
                    label: "15",
                  },
                  {
                    id: "20",
                    label: "20",
                  },
                ]}
                title={null}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
