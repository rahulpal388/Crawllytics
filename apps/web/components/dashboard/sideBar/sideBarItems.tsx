"use client";
import {
  ChartColumn,
  CircleAlert,
  FileText,
  Folder,
  LayoutDashboard,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

type ActiveSideBarItem =
  | "Dashboard"
  | "Projects"
  | "Issues"
  | "Reports"
  | "Pages";

const sideBarItems: {
  name: ActiveSideBarItem;
  getHref: (projectId?: string) => string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Projects",
    getHref: () => "/projects",
    icon: <Folder size={20} />,
  },
  {
    name: "Dashboard",
    getHref: () => "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Issues",
    getHref: (projectId) => `/projects/${projectId}/issues`,
    icon: <CircleAlert size={20} />,
  },
  {
    name: "Reports",
    getHref: (projectId) => `/projects/${projectId}/reports`,
    icon: <ChartColumn size={20} />,
  },
  {
    name: "Pages",
    getHref: (projectId) => `/projects/${projectId}/pages`,
    icon: <FileText size={20} />,
  },
];

export function SideBarItems({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();
  const projectId = "1234";

  return (
    <>
      <div className="flex flex-col gap-2">
        {sideBarItems.map((item, idx) => {
          const href = item.getHref(projectId);
          const isActive = pathname === href;
          return (
            <Link
              href={href}
              key={idx}
              className={`text-text-primary flex items-center gap-2 rounded-xs p-2 ${isActive ? "border-primary bg-primary-active/20 border-l-3 hover:opacity-90" : "hover:bg-primary-hover/10"}`}
            >
              {item.icon}
              {isOpen && item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
