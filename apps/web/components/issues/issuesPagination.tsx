import { Button } from "@repo/ui/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function IssuesPagination() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Button size="sm" variant="outline">
          <ChevronLeft size={20} strokeWidth={1.6} />
        </Button>
        <Button size="sm" variant="outline">
          1
        </Button>
        <Button size="sm" variant="outline">
          2
        </Button>
        <Button size="sm" variant="outline">
          3
        </Button>
        <Button size="sm" variant="outline">
          4
        </Button>
        <Button size="sm" variant="outline">
          <ChevronRight size={20} strokeWidth={1.6} />
        </Button>
      </div>
    </>
  );
}
