import { DashboardContainer } from "@repo/ui/components/dashboardContainer";
import { IssuesKPI } from "../../../../components/issues/issuesKPI";
import { IssuesTable } from "../../../../components/issues/issuesTable";

export default function IssuesPage() {
  return (
    <DashboardContainer className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Issues</h1>
        <p className="subHeading caption">
          Identify and fix issues preventing your pages from achieving their
          best search performance.
        </p>
      </div>
      {/* <IssuesKPI /> */}
      <IssuesTable />
    </DashboardContainer>
  );
}
