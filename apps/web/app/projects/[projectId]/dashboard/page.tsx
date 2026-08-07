import { DashboardContainer } from "@repo/ui/components/dashboardContainer";
import { IssuesDistribution } from "../../../../components/dashboard/issuesDistrubution";
import { DashboardHeader } from "../../../../components/dashboard/dashboardHeader";
import { ScoresCards } from "../../../../components/dashboard/kpiCards/kpiCards";
import { SeoTrends } from "../../../../components/dashboard/SeoTrends";
import { TopIssuesSection } from "../../../../components/dashboard/topIssuesSection";
import { TopPagesSection } from "../../../../components/dashboard/topPagesSection";
import { SearchConsolePerformance } from "../../../../components/dashboard/searchConsole/searchConsolePerformance";
import { TopQueries } from "../../../../components/dashboard/searchConsole/topQueries";
import { GoogleAnalytics } from "../../../../components/dashboard/googleAnalytics/googleAnalytics";
export default function DashboardPage() {
  return (
    <>
      <DashboardContainer>
        <div className="flex flex-col gap-8">
          <div>
            <DashboardHeader />
          </div>
          <ScoresCards />
          <div className="flex gap-4">
            <IssuesDistribution />
            <SeoTrends />
          </div>
          <TopIssuesSection />
          <TopPagesSection />
          {/* <div className="flex flex-wrap gap-4"> */}
          <SearchConsolePerformance />
          <TopQueries />
          {/* </div> */}
          <GoogleAnalytics />
        </div>
      </DashboardContainer>
    </>
  );
}
