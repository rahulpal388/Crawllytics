"use client";

import { Button } from "@repo/ui/components/button";
import { Plus } from "lucide-react";
import { DashboardContainer } from "@repo/ui/components/dashboardContainer";
import { ProjectItems } from "../../components/projects/projectItems";
import { useModalStore } from "../../store/modalStore";

export default function ProjectsPage() {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <DashboardContainer>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
          <div>
            <p className="caption-xs text-primary mb-2 font-medium tracking-wide uppercase">
              Workspace
            </p>
            <h1 className="heading-2">Projects</h1>
            <p className="subHeading mt-2 max-w-2xl text-sm">
              Monitor site health and organic performance across your websites.
            </p>
          </div>
          <Button
            variant="primary"
            className="shrink-0 overflow-hidden whitespace-nowrap"
            onClick={() => openModal("create-project")}
          >
            <Plus size={18} />
            New project
          </Button>
        </div>
        <ProjectItems />
      </div>
    </DashboardContainer>
  );
}
