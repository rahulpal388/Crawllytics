import { Card } from "@repo/ui/components/card/card";
import { ChangeIndicator } from "@repo/ui/components/charts/changeIndicator";
import { UserOverTime } from "./userOverTime";
import { TotalTrafficChannel } from "./totalTrafficChannel";

export function GoogleAnalytics() {
  return (
    <>
      <Card className="space-y-4">
        <h3 className="heading-5">Analytic Overview</h3>
        <div className="grid w-full grid-cols-6 gap-2">
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Users</h3>
            <p className="metric-sm">24.6k</p>
            <ChangeIndicator className="-mt-4" direction="up" value={15.2} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Sessions</h3>
            <p className="metric-sm">1.05k</p>
            <ChangeIndicator className="-mt-4" direction="up" value={9.8} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Page Views</h3>
            <p className="metric-sm">2.5k</p>
            <ChangeIndicator className="-mt-4" direction="up" value={4.3} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Bounce Rate</h3>
            <p className="metric-sm">1.23%</p>
            <ChangeIndicator className="-mt-4" direction="down" value={1.6} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Engagement Rate</h3>
            <p className="metric-sm">20.5%</p>
            <ChangeIndicator className="-mt-4" direction="up" value={4.3} />
          </Card>
          <Card className="space-y-2">
            <h3 className="text-text-secondary text-sm">Conversions</h3>
            <p className="metric-sm">5.6k</p>
            <ChangeIndicator className="-mt-4" direction="down" value={1.3} />
          </Card>
        </div>
        <div className="flex gap-4">
          <UserOverTime />
          <TotalTrafficChannel />
        </div>
      </Card>
    </>
  );
}
