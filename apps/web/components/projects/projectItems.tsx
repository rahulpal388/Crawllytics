import { ProjectCard, ProjectCardProps } from "./projectCard";

export const dummyProjects: ProjectCardProps[] = [
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
    projectUrl: "https://rahulpal.dev",
  },
  {
    projectId: "665b2c4a8f4e9a1b2c3d4e62",
    projectName: "Tech Blog",
    projectUrl: "https://blog.rahulpal.dev",
  },
  {
    projectId: "665b2c5b8f4e9a1b2c3d4e63",
    projectName: "SEO Analyzer",
    projectUrl: "https://seo-analyzer.dev",
  },
];

export function ProjectItems() {
  return (
    <>
      <div className="mt-8 flex flex-col gap-8">
        {dummyProjects.map((project) => (
          <ProjectCard
            key={project.projectId}
            projectId={project.projectId}
            projectName={project.projectName}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </>
  );
}
