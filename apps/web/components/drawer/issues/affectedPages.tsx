"use client";
import { AffectedPagesType } from "@repo/contract/types/apiResponseType/issuesTypes";
import { Button } from "@repo/ui/components/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { useDrawerStore } from "../../../store/drawerStore";

export function AffectedPages({
  affectedPages,
}: {
  affectedPages: AffectedPagesType;
}) {
  const [currentSlice, setCurrentSlice] = useState<number>(5);
  const openDrawer = useDrawerStore((s) => s.openDrawer);
  return (
    <>
      <div className="border-border-muted space-y-4 rounded-md border-[1.5px] p-4">
        <div className="flex items-center justify-between gap-4">
          <h6 className="body font-bold">Affected Pages</h6>
          <p className="caption-md">{affectedPages.count}</p>
        </div>
        <div className="space-y-2">
          {affectedPages.pages.slice(0, currentSlice).map((af) => (
            <div
              key={af.pageId}
              className="caption text-text-primary flex cursor-pointer items-center gap-2 underline"
              onClick={(e) => {
                openDrawer({
                  type: "view-pages",
                  param: {
                    viewPagesId: af.pageId,
                    url: af.url,
                    title: af.title,
                  },
                });
              }}
            >
              {af.url}
              <SquareArrowOutUpRight size={12} />
            </div>
          ))}
        </div>
        <div>
          <Button
            variant="ghost"
            size="md"
            onClick={() => {
              if (affectedPages.count - currentSlice > 0) {
                setCurrentSlice(affectedPages.count);
              } else {
                setCurrentSlice(5);
              }
            }}
          >
            {affectedPages.count - currentSlice > 0
              ? `+${affectedPages.count - currentSlice} more`
              : "View less"}
          </Button>
        </div>
      </div>
    </>
  );
}
