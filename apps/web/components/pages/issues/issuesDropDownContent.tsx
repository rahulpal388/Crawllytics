import { Button } from "@repo/ui/components/button";
import { DropDown } from "@repo/ui/components/dropdown/dropDown";

export function IssuesDropDownContent() {
  return (
    <>
      <DropDown title="Link" sideText={null} titleSideText={"6 issues"}>
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="body">Page has internal links to 3xx pages</p>
            <div>
              <Button variant="secondary" size="sm" className="">
                How to Fix
              </Button>
            </div>
          </div>
        </div>
      </DropDown>
    </>
  );
}
