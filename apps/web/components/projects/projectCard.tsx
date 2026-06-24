import { EllipsisVertical, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SiteAuditCard } from "./siteAuditCard";
import { GoogleSearchConsoleCard } from "./googleSearchConsoleCard";
import { GoogleAnalytic } from "./googleAnalytic";
import { TechnicalAuditCard } from "./techincalAuditCard";

export function ProjectCard() {
  return (
    <>
      <div className="project-card">
        <div className="border-border-muted flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <Image src="/icon.svg" alt="Project Icon" width={32} height={32} />
            <div>
              <h4 className="heading text-lg">beatroom.space</h4>
              <a
                href="https://beatroom.space"
                target="_blank"
                rel="noopener noreferrer"
                className="subHeading flex items-center gap-2 text-sm"
              >
                beatroom.space
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div>
            <EllipsisVertical size={28} className="cursor-pointer" />
          </div>
        </div>
        <div className="divide-border-muted mt-2 flex w-full flex-wrap items-center justify-between gap-8 px-4 max-md:divide-y md:divide-x">
          <SiteAuditCard />
          <TechnicalAuditCard />
          <GoogleSearchConsoleCard />
          <GoogleAnalytic />
        </div>
      </div>
    </>
  );
}
