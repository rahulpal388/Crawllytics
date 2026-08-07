import { Card } from "@repo/ui/components/card/card";
import { ChangeIndicator } from "@repo/ui/components/charts/changeIndicator";
import { TrendChart } from "@repo/ui/components/charts/trendChart";
import { Badges } from "@repo/ui/components/badges";

type KPICardItemProps = {
  title: string;
  metricValue: string;
  changeDirection: "up" | "down";
  changeValue: number;
  description: string;
  badge?: string;
  data: number[];
};

export function KPICardItem({
  title,
  metricValue,
  changeDirection,
  changeValue,
  description,
  badge,
  data,
}: KPICardItemProps) {
  return (
    <Card className="p flex h-42 flex-col space-y-2 overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="heading-6 text-text-secondary">{title}</h3>
        {badge && <Badges text={badge} type="success" />}
      </div>
      <p className="metric-md">{metricValue}</p>
      <div className="flex items-center gap-2">
        <ChangeIndicator direction={changeDirection} value={changeValue} />
        <p className="subHeading text-xs">{description}</p>
      </div>
      <TrendChart
        labels={data.map((_, index) => (index + 1).toString())}
        className="-mt-6"
        values={data}
        height={40}
        showXAxis={false}
        showYAxis={false}
        showGrid={false}
        showArea
        showTooltip={false}
      />
    </Card>
  );
}
