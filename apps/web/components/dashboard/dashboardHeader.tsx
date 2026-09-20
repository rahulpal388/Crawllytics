import { Button } from "@repo/ui/components/button";
import { Download, RotateCcw, Settings } from "lucide-react";
import { Status } from "@repo/ui/components/status";

export function DashboardHeader() {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex w-fit items-center justify-between gap-2">
            <h4 className="heading text-xl">BeatRoom</h4>
            <Status variant="completed" />
          </div>
          <p className="subHeading text-xs">
            Last Crawl: 2 hours ago &middot; crawled 10 pages
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="text-xs">
            <RotateCcw size={16} className="mr-px shrink-0" />
            Re-run
          </Button>
          <Button variant="accent-outline" className="text-xs">
            <Download size={16} className="mr-px shrink-0" />
            Export
          </Button>
          <Button variant="primary" className="text-xs">
            <Settings size={16} className="mr-px shrink-0" />
            Settings
          </Button>
        </div>
      </div>
    </>
  );
}
