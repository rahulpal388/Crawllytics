"use client";

import { useMemo, useState } from "react";
import { IssuesFilter, IssuesFilterActions } from "./issuesFilterActions";
import { DataTable, Column } from "@repo/ui/components/table";
import { IssuesTableMeta } from "./issuesTableMeta";
import { SeverityBadges } from "../badges/severityBadges";
import { CategoryBadges } from "../badges/categoryBages";
import { ImpactBadges } from "../badges/impactBadges";
import { StatusBadge } from "../badges/statusBadge";
import { IssuesTableActions } from "./issuesTableActions";
import { Card } from "@repo/ui/components/card/card";
import { IssuesPagination } from "./issuesPagination";
import { Select } from "@repo/ui/components/dropdown/select";
import { issuesInfoTempData as issuesData } from "@repo/contracts/constant/responseConstant/issues/issuesInfoTempData";
import { IssuesResponseType } from "@repo/contracts/apiContracts/apiResponse/issuesTypes";

const tableData: IssuesResponseType[] = issuesData.map((issue) => ({
  id: issue.id,
  issues: {
    title: issue.title,
    description: issue.description,
  },
  severity: issue.severity,
  category: issue.category,
  affectedPages: issue.affectedPages.count,
  impact:
    issue.severity === "critical" || issue.severity === "high" ? "high" : "low",
  status: "open",
  actions: null,
}));

const columns: Column<IssuesResponseType>[] = [
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

type RowPerPageType = 5 | 10 | 15 | 20;

export function IssuesTable() {
  const [selected, setSelected] = useState<IssuesFilter>({
    severity: "all",
    category: "all",
    status: "all",
    impact: "all",
  });

  const [rowsPerPage, setRowsPerPage] = useState<RowPerPageType>(10);
  const [currentDataView, setCurrentDataView] = useState(1);

  const filteredData = useMemo(() => {
    return tableData.filter((issue) => {
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
  }, [selected]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const safeCurrentPage = Math.min(currentDataView, Math.max(totalPages, 1));

  const startIndex = (safeCurrentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);

  const currentPageData = useMemo(() => {
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, startIndex, endIndex]);

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value) as RowPerPageType);
    setCurrentDataView(1);
  };

  return (
    <div className="space-y-4">
      <IssuesFilterActions
        selected={selected}
        setSelected={(value) => {
          setSelected(value);
          setCurrentDataView(1);
        }}
      />

      <Card className="space-y-4">
        <DataTable
          columns={columns}
          data={currentPageData}
          className="-mx-4 -mt-4 rounded shadow-none"
        />

        <div className="flex h-16 items-center justify-between gap-8">
          <p className="caption-xs">
            Showing {filteredData.length === 0 ? 0 : startIndex + 1} to{" "}
            {endIndex} of {filteredData.length} issues
          </p>

          <IssuesPagination
            rowPerPage={rowsPerPage}
            filterDataLength={filteredData.length}
            setCurrentDataView={setCurrentDataView}
            currentDataView={safeCurrentPage}
          />

          <div className="flex items-center gap-4">
            <p className="body-sm">Rows:</p>

            <Select
              value={rowsPerPage.toString()}
              onValueChange={handleRowsPerPageChange}
              options={[
                { id: "5", label: "5" },
                { id: "10", label: "10" },
                { id: "15", label: "15" },
                { id: "20", label: "20" },
              ]}
              title={null}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
