import { Button } from "@repo/ui/components/button";
import { Card } from "@repo/ui/components/card/card";
import { CardContainer } from "@repo/ui/components/cardContaniner";
import { Column, DataTable } from "@repo/ui/components/table";

type TopQueryTableData = {
  id: string;
  query: string;
  click: number;
  impression: number;
  ctr: number;
  position: number;
};

const columns: Column<TopQueryTableData>[] = [
  {
    key: "query",
    heading: "Query",
  },
  {
    key: "click",
    heading: "Clicks",
  },
  {
    key: "impression",
    heading: "Impressions",
  },
  {
    key: "ctr",
    heading: "CTR",
    render: (row) => `${row.ctr.toFixed(2)}%`,
  },
  {
    key: "position",
    heading: "Position",
    render: (row) => row.position,
  },
];

const data: TopQueryTableData[] = [
  {
    id: "1",
    query: "Seo analyzer",
    click: 2345,
    impression: 12452,
    ctr: 18.83,
    position: 1.2,
  },
  {
    id: "2",
    query: "Website audit",
    click: 1987,
    impression: 9856,
    ctr: 20.16,
    position: 1.6,
  },
  {
    id: "3",
    query: "Technical seo",
    click: 1234,
    impression: 6543,
    ctr: 18.86,
    position: 2.1,
  },
  {
    id: "4",
    query: "Seo checker",
    click: 1102,
    impression: 5231,
    ctr: 21.07,
    position: 2.3,
  },
  {
    id: "5",
    query: "Site audit",
    click: 987,
    impression: 4321,
    ctr: 22.84,
    position: 2.7,
  },
  {
    id: "6",
    query: "Core web vitals",
    click: 845,
    impression: 3912,
    ctr: 21.6,
    position: 3.1,
  },
  {
    id: "7",
    query: "Page speed test",
    click: 732,
    impression: 3567,
    ctr: 20.52,
    position: 3.4,
  },
  {
    id: "8",
    query: "Google search console",
    click: 698,
    impression: 3411,
    ctr: 20.46,
    position: 3.8,
  },
  {
    id: "9",
    query: "Meta description checker",
    click: 584,
    impression: 2890,
    ctr: 20.21,
    position: 4.2,
  },
  {
    id: "10",
    query: "Crawl website",
    click: 473,
    impression: 2415,
    ctr: 19.59,
    position: 4.8,
  },
];

export function TopQueries() {
  return (
    <>
      <Card className="flex-1 p-0 py-px">
        <div className="p-4">
          <div className="flex items-center justify-between gap-4">
            <h4 className="heading-5 text-sm">Top Queries</h4>
            <Button variant="ghost">View Full Report</Button>
          </div>
        </div>
        <DataTable
          data={data}
          columns={columns}
          className="rounded-[0px]"
          cellClassName="whitespace-nowrap"
          headerCellClassName="text-sm   "
        />
      </Card>
    </>
  );
}
