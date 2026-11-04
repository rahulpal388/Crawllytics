"use client";

import { useProjectsStore } from "../../store/projectsStore";
import { ProjectCard } from "./projectCard";

export function ProjectItems() {
  const projects = useProjectsStore((state) => state.projects);

  if (projects.length === 0) {
    return (
      <div className="border-border-muted bg-surface-base mt-8 rounded-lg border border-dashed p-10 text-center">
        <h2 className="heading-5">No projects yet</h2>
        <p className="caption mt-2">
          Create your first project to start monitoring website health.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.projectId} {...project} />
      ))}
    </div>
  );
}
