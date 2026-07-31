import { Card } from "@repo/ui/components/card/card";
import { ChangeIndicator } from "@repo/ui/components/charts/changeIndicator";
import { CardContainer } from "@repo/ui/components/cardContaniner";
import { TrendChart } from "@repo/ui/components/charts/trendChart";

export function ScoresCards() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <Card className="flex h-56 flex-col overflow-hidden p-5">
          <h2 className="heading-6 text-text-secondary">SEO Score</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-1">
              <span className="metric-md">80</span>

              <span className="body-sm text-text-secondary mb-1">/100</span>
            </div>
            <ChangeIndicator direction="up" value={18} />
          </div>

          <TrendChart
            labels={["1", "2", "3", "4", "5", "6", "7"]}
            values={[4, 5, 3, 6, 7, 6, 8]}
            height={80}
            showXAxis={false}
            showYAxis={false}
            showGrid={false}
            showArea
            showTooltip={false}
          />
        </Card>
        <Card className="flex h-56 flex-col overflow-hidden p-5">
          <h2 className="heading-6 text-text-secondary">Pages Crawled</h2>
          <div className="flex items-center gap-4">
            <p className="metric-md">1,234</p>
            <ChangeIndicator direction="up" value={18} />
          </div>

          <TrendChart
            className=""
            labels={["1", "2", "3", "4", "5", "6", "7"]}
            values={[4, 5, 3, 6, 7, 6, 8]}
            height={80}
            showXAxis={false}
            showYAxis={false}
            showGrid={false}
            showArea
            showTooltip={false}
          />
        </Card>
        <Card className="flex h-56 flex-col overflow-hidden p-5">
          <h2 className="heading-6 text-text-secondary">Total Issues</h2>
          <div className="flex items-center gap-4">
            <p className="metric-md">14</p>
            <ChangeIndicator direction="down" value={18} />
          </div>

          <TrendChart
            className=""
            labels={["1", "2", "3", "4", "5", "6", "7"]}
            values={[8, 6, 7, 6, 3, 5, 4]}
            height={80}
            showXAxis={false}
            showYAxis={false}
            showGrid={false}
            showArea
            showTooltip={false}
          />
        </Card>
        <Card className="flex h-56 flex-col overflow-hidden p-5">
          <div className="space-y-4">
            <h2 className="heading-6 text-text-secondary">Organic Clicks</h2>
            <div className="flex items-center gap-4">
              <p className="metric-md">1.24k</p>
              <ChangeIndicator direction="up" value={30} />
            </div>
          </div>

          <div className="mt-auto">
            <TrendChart
              className=""
              labels={["1", "2", "3", "4", "5", "6", "7"]}
              values={[4, 5, 3, 6, 7, 6, 8]}
              height={80}
              showXAxis={false}
              showYAxis={false}
              showGrid={false}
              showArea
              showTooltip={false}
            />
          </div>
        </Card>

        <Card className="flex h-56 flex-col overflow-hidden p-5">
          <h2 className="heading-6 text-text-secondary">Total Users</h2>
          <div className="flex items-center gap-4">
            <p className="metric-md">1.3k</p>
            <ChangeIndicator direction="up" value={24} />
          </div>

          <TrendChart
            className=""
            labels={["1", "2", "3", "4", "5", "6", "7"]}
            values={[4, 5, 3, 6, 7, 6, 8]}
            height={80}
            showXAxis={false}
            showYAxis={false}
            showGrid={false}
            showArea
            showTooltip={false}
          />
        </Card>
      </div>
    </>
  );
}
