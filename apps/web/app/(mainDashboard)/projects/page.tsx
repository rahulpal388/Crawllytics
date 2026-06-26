import { Button } from "@repo/ui/components/button";
import { Plus } from "lucide-react";
import { ProjectItems } from "../../../components/projects/projectItems";
import { DashboardContainer } from "@repo/ui/components/dashboardContainer";

export default function ProjectsPage() {
  return (
    <DashboardContainer>
      <div>
        <div className="flex justify-between gap-4 max-md:flex-col">
          <div>
            <h1 className="heading text-xl">Projects</h1>
            <p className="subHeading text-sm">
              Select a project to view crawl results, SEO insights, reports, and
              website health metrics.
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              className="overflow-hidden whitespace-nowrap"
            >
              <Plus size={20} className="mr-2 shrink-0" />
              Create Project
            </Button>
          </div>
        </div>
        <ProjectItems />
      </div>
    </DashboardContainer>
  );
}
