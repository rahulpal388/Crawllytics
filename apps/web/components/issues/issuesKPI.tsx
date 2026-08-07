import { KPICardItem } from "../dashboard/kpiCards/kpiCardItem";

const issuesKpiData: {
  title: string;
  metrixValue: string;
  changeDirection: "up" | "down";
  changeValue: number;
  description: string;
}[] = [];

export function IssuesKPI() {
  return (
    <>
      <div>
        <KPICardItem
          title="SEO Score"
          metricValue="80"
          changeDirection="up"
          changeValue={18}
          description="vs last week"
          data={[]}
        />
      </div>
    </>
  );
}
