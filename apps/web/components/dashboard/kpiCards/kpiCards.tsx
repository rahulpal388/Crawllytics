"use client";
import { KPICardItem } from "./kpiCardItem";
import { useKPIMatrix } from "../../../queries/dashboard.hooks";

export function ScoresCards() {
  const { data, isLoading } = useKPIMatrix();

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <KPICardItem
          title="SEO Score"
          metricValue="80"
          changeDirection="up"
          changeValue={18}
          badge="Good"
          description="vs last week"
          data={[2]}
        />
        <KPICardItem
          title="Pages Crawled"
          metricValue="1,234"
          changeDirection="up"
          changeValue={18}
          description="vs last week"
          data={[4, 5, 3, 6, 7, 6, 8]}
        />
        <KPICardItem
          title="Total Issues"
          metricValue="14"
          changeDirection="down"
          changeValue={14}
          description="vs last week"
          data={[8, 6, 7, 6, 3, 5, 4]}
        />
        <KPICardItem
          title="Organic Clicks"
          metricValue="1.24k"
          changeDirection="up"
          changeValue={30}
          description="vs last week"
          data={[4, 5, 3, 6, 7, 6, 8]}
        />
        <KPICardItem
          title="Total Users"
          metricValue="1.3k"
          changeDirection="up"
          changeValue={24}
          description="vs last week"
          data={[4, 5, 3, 6, 7, 6, 8]}
        />
      </div>
    </>
  );
}
