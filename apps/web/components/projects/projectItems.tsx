import { EllipsisVertical, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProjectCard } from "./projectCard";

export function ProjectItems() {
  return (
    <>
      <div className="mt-8 flex flex-col gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
