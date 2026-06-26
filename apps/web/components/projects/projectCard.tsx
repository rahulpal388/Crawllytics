"use client";
import { EllipsisVertical, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SiteAuditCard } from "./siteAuditCard";
import { GoogleSearchConsoleCard } from "./googleSearchConsoleCard";
import { GoogleAnalytic } from "./googleAnalytic";
import { TechnicalAuditCard } from "./techincalAuditCard";
import { useSelectedProjectId } from "../../store/useSelectedProjectId";
import { useRouter } from "next/navigation";

export type ProjectCardProps = {
  projectId: string;
  projectName: string;
  projectUrl: string;
};

export function ProjectCard({
  projectId,
  projectName,
  projectUrl,
}: ProjectCardProps) {
  const { setProjectId } = useSelectedProjectId();
  const router = useRouter();
  return (
    <>
      <div className="project-card">
        <div
          className="border-border-muted hover:bg-surface-muted flex cursor-pointer items-center justify-between border-b px-4 py-4"
          onClick={() => {
            setProjectId(projectId);
            router.push(`/projects/${projectId}/dashboard`);
          }}
        >
          <div className="flex items-center gap-4">
            <Image src="/icon.svg" alt="Project Icon" width={32} height={32} />
            <div>
              <h4 className="heading text-lg">{projectName}</h4>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group subHeading flex items-center gap-2 text-sm"
              >
                <span className="group-hover:text-primary"> {projectUrl}</span>
                <ExternalLink size={16} className="group-hover:text-primary" />
              </a>
            </div>
          </div>
          <div>
            <EllipsisVertical
              size={28}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="divide-border-muted mt-2 flex w-full flex-wrap items-center justify-between gap-8 px-4 py-4 max-md:divide-y md:divide-x">
          <SiteAuditCard />
          <TechnicalAuditCard />
          <GoogleSearchConsoleCard />
          <GoogleAnalytic />
        </div>
      </div>
    </>
  );
}
