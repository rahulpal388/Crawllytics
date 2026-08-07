"use client";
import { Button } from "@repo/ui/components/button";
import { CardContainer } from "@repo/ui/components/cardContaniner";
import { Column, DataTable } from "@repo/ui/components/table";
import { ActionsPageSectionTable } from "./actionPageSectionTable";
import { TopPageUrlAction } from "./topPageUrlAction";
import { useSelectedProjectId } from "../../store/useSelectedProjectId";
import { useRouter } from "next/navigation";
import { StatusCodeBadge } from "../badges/statusCodeBadge";

type PagesRow = {
  id: string;
  url: string;
  status: number;
  issues: number;
  seo: number;
  action: null;
};

export const issueColumns: Column<PagesRow>[] = [
  {
    key: "url",
    heading: "Page URL",
    render: (row) => TopPageUrlAction({ url: row.url }),
  },
  {
    key: "status",
    heading: "Status",
    render: (data) => <StatusCodeBadge statusCode={data.status} />,
  },
  {
    key: "issues",
    heading: "Issues",
  },
  {
    key: "seo",
    heading: "SEO Score",
  },
  {
    key: "action",
    heading: "Actions",
    render: () => <ActionsPageSectionTable />,
  },
];

export const issueData: PagesRow[] = [
  {
    id: "1",
    url: "/",
    status: 200,
    issues: 0,
    seo: 98,
    action: null,
  },
  {
    id: "2",
    url: "/about",
    status: 500,
    issues: 2,
    seo: 94,
    action: null,
  },
  {
    id: "3",
    url: "/services",
    status: 400,
    issues: 5,
    seo: 87,
    action: null,
  },
  {
    id: "4",
    url: "/pricing",
    status: 200,
    issues: 1,
    seo: 96,
    action: null,
  },
  {
    id: "5",
    url: "/blog/technical-seo-guide",
    status: 300,
    issues: 8,
    seo: 79,
    action: null,
  },
  {
    id: "6",
    url: "/blog/core-web-vitals",
    status: 200,
    issues: 3,
    seo: 91,
    action: null,
  },
  {
    id: "7",
    url: "/contact",
    status: 200,
    issues: 0,
    seo: 99,
    action: null,
  },
  {
    id: "8",
    url: "/privacy-policy",
    status: 200,
    issues: 4,
    seo: 88,
    action: null,
  },
];

export function TopPagesSection() {
  const projectId = useSelectedProjectId((s) => s.projectId);
  const router = useRouter();
  return (
    <>
      <CardContainer className="bg-surface-base">
        <div className="flex items-center justify-between gap-4 p-4">
          <h5 className="heading text-lg">Page Overview</h5>
          <Button
            variant="ghost-icon"
            size="sm"
            onClick={() => {
              router.push(`/projects/${projectId}/pages`);
            }}
          >
            View All Pages
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
          <p className="subHeading text-xs">Showing 8 of 100</p>
        </div>
      </CardContainer>
    </>
  );
}
