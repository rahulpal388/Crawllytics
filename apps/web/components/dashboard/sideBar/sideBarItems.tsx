"use client";
import {
  Bot,
  ChartColumn,
  FileText,
  Folder,
  LayoutDashboard,
  Settings,
  TriangleAlert,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelectedProjectId } from "../../../store/useSelectedProjectId";

type ActiveSideBarItem =
  | "Dashboard"
  | "Projects"
  | "Issues"
  | "Reports"
  | "Pages"
  | "Crawls"
  | "Settings";

const sideBarItems: {
  name: ActiveSideBarItem;
  getHref: (projectId?: string | null) => string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Projects",
    getHref: () => "/projects",
    icon: <Folder size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
  {
    name: "Dashboard",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/dashboard` : "/dashboard",
    icon: <LayoutDashboard size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
  {
    name: "Issues",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/issues` : "/issues",
    icon: <TriangleAlert size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
  {
    name: "Pages",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/pages` : "/pages",
    icon: <FileText size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
  {
    name: "Crawls",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/crawls` : "/crawls",
    icon: <Bot size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
  {
    name: "Reports",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/reports` : "/reports",
    icon: <ChartColumn size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
  {
    name: "Settings",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/settings` : "/settings",
    icon: <Settings size={16} strokeWidth={1.6} absoluteStrokeWidth />,
  },
];

export function SideBarItems({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();
  const pathnameProjectId = pathname?.split("/")[2] || null;
  const { projectId, setProjectId } = useSelectedProjectId();

  useEffect(() => {
    if (pathnameProjectId && pathnameProjectId !== projectId) {
      setProjectId(pathnameProjectId);
    }
  }, [pathnameProjectId, projectId, setProjectId]);
  return (
    <>
      <div className="flex flex-col gap-4">
        {sideBarItems.map((item, idx) => {
          const href = item.getHref(projectId);
          const isActive = pathname === href;
          return (
            <Link
              href={href}
              key={idx}
              className={`text-text-primary flex items-center gap-2 rounded-xs p-2 ${isActive ? "border-primary bg-primary-active/20 border-l-3 hover:opacity-90" : "hover:bg-primary-hover/10"} ${!isOpen && "justify-center"} `}
            >
              {item.icon}
              {isOpen && <span className="body">{item.name}</span>}
            </Link>
          );
        })}
      </div>
    </>
  );
}
