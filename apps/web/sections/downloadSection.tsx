import { Button } from "@repo/ui/components/button";
import { Container } from "@repo/ui/components/container";
import { Download } from "lucide-react";
import { PdfSvg } from "@repo/ui/svg/pdfSvg";
import { FileText, FileDown, TriangleAlert, Code2, Users } from "lucide-react";
import { ChartBarSvg } from "@repo/ui/svg/chartBarSvg";
import { WarningSvg } from "@repo/ui/svg/warningSvg";
import { CodeSvg } from "@repo/ui/svg/codeSvg";
import { ThreeUserSvg } from "@repo/ui/svg/threeUserSvg";

const downloadList: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "PDF Export",
    description:
      "Download professional SEO audit reports in a clean, shareable PDF format.",
    icon: <PdfSvg />,
  },
  {
    title: "Executive Summary",
    description:
      "Get a quick overview of your website's SEO health and key findings.",
    icon: <ChartBarSvg />,
  },
  {
    title: "Issue Prioritization",
    description:
      "Identify critical, high, and medium-priority issues at a glance.",
    icon: <WarningSvg />,
  },
  {
    title: "Technical Findings",
    description: "Review detailed technical SEO insights and recommendations.",
    icon: <CodeSvg />,
  },
  {
    title: "Team Collaboration",
    description: "Share reports with clients, stakeholders, and team members.",
    icon: <ThreeUserSvg />,
  },
];

export function DownloadSection() {
  return (
    <>
      <Container>
        <div className="flex h-full w-full gap-4 py-12">
          <div className="flex-1/4">
            <Button
              variant="outline"
              className="cursor-default text-[0.5rem]! uppercase"
            >
              <Download size={12} />
              Report that matters
            </Button>
            <h2 className="heading mt-4 text-5xl">
              Download and Share Reports
            </h2>
            <p className="subHeading mt-4">
              Export detailed SEO reports with technical findings, issue
              prioritization, and actionable recommendations.
            </p>
            <div>
              {downloadList.map((item, idx) => (
                <div key={idx} className="mt-8 flex items-center gap-8">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1/3"></div>
        </div>
      </Container>
    </>
  );
}
