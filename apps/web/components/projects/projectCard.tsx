"use client";

import { Card } from "@repo/ui/components/card/card";
import {
  EllipsisVertical,
  ExternalLink,
  FileDown,
  FolderOpen,
  ImageOff,
  Settings,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { deleteProject } from "../../api/projects.api";
import { useSelectedProjectId } from "../../store/useSelectedProjectId";
import { useProjectsStore } from "../../store/projectsStore";
import { GoogleAnalytic } from "../dashboard/googleAnalytic";
import { GoogleSearchConsoleCard } from "../dashboard/googleSearchConsoleCard";
import { SiteAuditCard } from "./siteAuditCard";
import { TechnicalAuditCard } from "./techincalAuditCard";

export type ProjectCardProps = {
  projectId: string;
  projectName: string;
  projectUrl: string;
};

export function ProjectCard({ projectId, projectName, projectUrl }: ProjectCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const setProjectId = useSelectedProjectId((state) => state.setProjectId);
  const selectedProjectId = useSelectedProjectId((state) => state.projectId);
  const removeProject = useProjectsStore((state) => state.removeProject);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleDismiss(event: MouseEvent | KeyboardEvent) {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setIsMenuOpen(false);
      }
      if (
        event instanceof MouseEvent &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleDismiss);
    document.addEventListener("mousedown", handleDismiss);
    return () => {
      document.removeEventListener("keydown", handleDismiss);
      document.removeEventListener("mousedown", handleDismiss);
    };
  }, [isMenuOpen]);

  function openProject() {
    setIsMenuOpen(false);
    setProjectId(projectId);
    router.push(`/projects/${projectId}/dashboard`);
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${projectName}"? This action cannot be undone.`,
    );
    if (!confirmed) return;

    setError(null);
    setIsDeleting(true);
    try {
      await deleteProject(projectId);
      removeProject(projectId);
      if (selectedProjectId === projectId) setProjectId(null);
      setIsMenuOpen(false);
    } catch {
      setError("Unable to delete this project. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-border-muted flex items-start justify-between gap-4 border-b px-5 py-4">
        <button
          type="button"
          className="flex min-w-0 items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={openProject}
        >
          <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-md">
            <ImageOff size={20} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="heading-5 block truncate">{projectName}</span>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="text-text-secondary mt-1 flex max-w-full items-center gap-1 text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="truncate">{projectUrl}</span>
              <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
            </a>
            <span className="caption-xs mt-1 block">No crawl data available yet</span>
          </span>
        </button>

        <div ref={menuRef} className="relative shrink-0">
          <button
            type="button"
            aria-label={`Actions for ${projectName}`}
            aria-expanded={isMenuOpen}
            aria-controls={`project-actions-${projectId}`}
            disabled={isDeleting}
            className="rounded-xs p-2 text-text-secondary transition-colors hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <EllipsisVertical size={20} />
          </button>
          {isMenuOpen && (
            <div
              id={`project-actions-${projectId}`}
              role="menu"
              className="border-border-muted bg-surface-base absolute top-11 right-0 z-10 w-52 rounded-md border p-1 shadow-lg"
            >
              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-xs px-3 py-2 text-left text-sm hover:bg-surface-subtle"
                onClick={openProject}
              >
                <FolderOpen size={16} />
                Open project
              </button>
              <button
                type="button"
                role="menuitem"
                disabled
                className="text-text-secondary flex w-full cursor-not-allowed items-center gap-2 rounded-xs px-3 py-2 text-left text-sm opacity-60"
              >
                <Settings size={16} />
                Rename (TODO)
              </button>
              <button
                type="button"
                role="menuitem"
                disabled
                className="text-text-secondary flex w-full cursor-not-allowed items-center gap-2 rounded-xs px-3 py-2 text-left text-sm opacity-60"
              >
                <FileDown size={16} />
                Download report (TODO)
              </button>
              <button
                type="button"
                role="menuitem"
                className="text-error flex w-full items-center gap-2 rounded-xs px-3 py-2 text-left text-sm hover:bg-red-50"
                onClick={handleDelete}
              >
                <Trash2 size={16} />
                Delete project
              </button>
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-error border-b border-red-100 px-5 py-3 text-sm">{error}</p>}

      <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
        <SiteAuditCard />
        <TechnicalAuditCard />
        <GoogleSearchConsoleCard />
        <GoogleAnalytic />
      </div>
    </Card>
  );
}
