import { Card } from "@repo/ui/components/card";
import { DashboardContainer } from "@repo/ui/components/dashboardContainer";
import { IssuesDistribution } from "../../../../components/dashboard/issuesDistrubution";
import { DashboardHeader } from "../../../../components/dashboard/dashboardHeader";
import { ScoresCards } from "../../../../components/dashboard/scoresCards";
import { WebsiteHealthDistribution } from "../../../../components/dashboard/websiteHealthDistribution";
import { TopIssuesSection } from "../../../../components/dashboard/topIssuesSection";
export default function DashboardPage() {
  return (
    <>
      <DashboardContainer>
        <div className="flex flex-col gap-8">
          <div>
            <DashboardHeader />
          </div>
          <ScoresCards />
          <div className="flex flex-wrap gap-4">
            <IssuesDistribution />
            <WebsiteHealthDistribution />
          </div>
          <div className="border-surface-muted border-t-[3px] py-4">
            <TopIssuesSection />
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}
