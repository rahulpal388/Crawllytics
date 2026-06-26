import { Card } from "@repo/ui/components/card";
import { DashboardContainer } from "@repo/ui/components/dashboardContainer";
import { IssuesDistribution } from "../../../../../components/projects/issuesDistrubution";
export default function DashboardPage() {
  return (
    <>
      <DashboardContainer>
        <div className="flex flex-col gap-8">
          <div>
            <h6 className="heading text-lg">Dashboard</h6>
            <p className="subHeading text-sm">Welcome to the Dashboard</p>
          </div>
          <div className="flex gap-4">
            <div className="grid w-[56rem] grid-cols-3 flex-wrap gap-4">
              <Card title="SEO Score" value="38" />
              <Card title="SEO Score" value="38" />
              <Card title="SEO Score" value="38" />
              <Card title="SEO Score" value="38" />
            </div>
            <div className="mt-4">
              <IssuesDistribution />
            </div>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}
