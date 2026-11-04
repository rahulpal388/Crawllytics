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
import { useEffect } from "react";
import { useSelectedProjectId } from "../../../store/useSelectedProjectId";

type ActiveSideBarItem =
  | "Dashboard"
  | "Projects"
  | "Issues"
  | "Reports"
  | "Pages"
  | "Crawls"
  | "Settings";

export const sideBarItems: {
  name: ActiveSideBarItem;
  getHref: (projectId?: string | null) => string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Projects",
    getHref: () => "/projects",
    icon: <Folder size={21} strokeWidth={1.8} absoluteStrokeWidth />,
  },
  {
    name: "Dashboard",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/dashboard` : "/dashboard",
    icon: <LayoutDashboard size={21} strokeWidth={1.8} absoluteStrokeWidth />,
  },
  {
    name: "Issues",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/issues` : "/issues",
    icon: <TriangleAlert size={21} strokeWidth={1.8} absoluteStrokeWidth />,
  },
  {
    name: "Pages",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/pages` : "/pages",
    icon: <FileText size={21} strokeWidth={1.8} absoluteStrokeWidth />,
  },
  {
    name: "Crawls",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/crawls` : "/crawls",
    icon: <Bot size={21} strokeWidth={1.8} absoluteStrokeWidth />,
  },
  {
    name: "Reports",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/reports` : "/reports",
    icon: <ChartColumn size={21} strokeWidth={1.8} absoluteStrokeWidth />,
  },
  {
    name: "Settings",
    getHref: (projectId) =>
      projectId ? `/projects/${projectId}/settings` : "/settings",
    icon: <Settings size={21} strokeWidth={1.8} absoluteStrokeWidth />,
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
        {sideBarItems.map((item) => {
          const href = item.getHref(projectId);
          const isActive = pathname === href;
          return (
            <Link
              href={href}
              key={item.name}
              aria-current={isActive ? "page" : undefined}
              title={!isOpen ? item.name : undefined}
              className={`text-text-primary flex min-h-10 items-center gap-3 rounded-xs px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? "border-primary bg-primary-active/15 border-l-3 font-medium hover:bg-primary-active/20" : "hover:bg-surface-subtle"} ${!isOpen && "justify-center px-2"} `}
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
