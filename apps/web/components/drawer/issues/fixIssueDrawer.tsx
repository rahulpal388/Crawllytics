import { Drawer } from "@repo/ui/components/overlay/drawer";
import { SeverityBadges } from "../../badges/severityBadges";
import { CategoryBadges } from "../../badges/categoryBages";
import { HowToFixComponent } from "./howToFixComponent";
import { AffectedPages } from "./affectedPages";
import { Calendar, CircleDot } from "lucide-react";
import { formateDate } from "../../../lib/formateDate";
import { useDrawerStore } from "../../../store/drawerStore";
import { Loader } from "@repo/ui/components/loader";
import { useQuery } from "@tanstack/react-query";
import { IssuesQueries } from "../../../queries/issues.queries";

export function FixIssueDrawer() {
  const { closeDrawer, drawers } = useDrawerStore();

  const currentDrawer = drawers.at(-1);

  const { data } = useQuery(
    IssuesQueries.getIssuesInfo(
      currentDrawer?.type === "fix-issues"
        ? currentDrawer.param.fixIssuesId
        : undefined,
    ),
  );

  return (
    <>
      <Drawer
        onClose={closeDrawer}
        className="w-2xl"
        containerClassName=" h-full"
      >
        {!data ? (
          <div className="flex h-full items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="space-y-8 pb-8">
            <div className="space-y-2">
              <h4 className="heading-4 break-drawer-heading">{data.title}</h4>
              <div className="flex items-center gap-4">
                <SeverityBadges severity={data.severity} />
                <CategoryBadges category={data.category} />
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="body font-bold">Description</h5>
              <p className="caption-xs">{data.description}</p>
            </div>
            <div className="space-y-2">
              <h5 className="body font-bold">Why it matters</h5>
              <p className="caption-xs">{data.whyItMatters}</p>
            </div>
            <div className="space-y-2">
              <h5 className="body font-bold">Recommendation</h5>
              <p className="caption-xs">{data.recommended.description}</p>
              {data.recommended.steps && (
                <ul className="list-inside list-disc space-y-1">
                  {data.recommended.steps.map((step, index) => (
                    <li key={index} className="caption-xs">
                      {step}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <HowToFixComponent howToFix={data.howToFix} />
            <AffectedPages affectedPages={data.affectedPages} />
            <div className="space-y-4">
              <div>
                <p className="caption-md">Detected</p>
                <p className="caption flex items-center gap-2">
                  <Calendar size={16} />
                  {formateDate(data.detected)}
                </p>
              </div>
              <div>
                <p className="caption-md">Crawl</p>
                <p className="caption flex items-center gap-2">
                  <CircleDot size={16} />#{data.crawlCount}
                </p>
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
}
