import { Button } from "@repo/ui/components/button";
import { Download, RotateCcw, Settings } from "lucide-react";
import { Status } from "@repo/ui/components/status";

export function DashboardHeader() {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h4 className="heading text-xl">BeatRoom</h4>
            <Status variant="completed" />
          </div>
          <p className="subHeading text-xs">Last Crawl: 2 hours ago</p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            startIcon={<RotateCcw size={20} className="mr-2 shrink-0" />}
          >
            Re-run
          </Button>
          <Button
            variant="primary"
            startIcon={<Download size={20} className="mr-2 shrink-0" />}
          >
            Export
          </Button>
          <Button
            variant="primary"
            startIcon={<Settings size={20} className="mr-2 shrink-0" />}
          >
            Settings
          </Button>
        </div>
      </div>
    </>
  );
}
