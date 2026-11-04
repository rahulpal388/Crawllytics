import { create } from "zustand";

export type Project = {
  projectId: string;
  projectName: string;
  projectUrl: string;
};

const initialProjects: Project[] = [
  {
    projectId: "665b2c1d8f4e9a1b2c3d4e5f",
    projectName: "Crawllytics",
    projectUrl: "https://crawllytics.dev",
  },
  {
    projectId: "665b2c2e8f4e9a1b2c3d4e60",
    projectName: "BeatRoom",
    projectUrl: "https://beatroom.space",
  },
  {
    projectId: "665b2c3f8f4e9a1b2c3d4e61",
    projectName: "Portfolio",
    projectUrl: "https://rahul.dev",
  },
  {
    projectId: "665b2c4a8f4e9a1b2c3d4e62",
    projectName: "Tech Blog",
    projectUrl: "https://blog.rahul.dev",
  },
  {
    projectId: "665b2c5b8f4e9a1b2c3d4e63",
    projectName: "SEO Analyzer",
    projectUrl: "https://seo-analyzer.dev",
  },
];

type ProjectsStore = {
  projects: Project[];
  addProject: (project: Project) => void;
  removeProject: (projectId: string) => void;
};

export const useProjectsStore = create<ProjectsStore>((set) => ({
  // TODO: Replace fixture initialization with the authenticated project-list query.
  projects: initialProjects,
  addProject: (project) =>
    set((state) => ({ projects: [project, ...state.projects] })),
  removeProject: (projectId) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.projectId !== projectId),
    })),
}));
