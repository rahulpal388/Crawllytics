import { IssuesDropDownContent } from "./issuesDropDownContent";

export function Issues() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4">
      <h4 className="heading-4 border-border-muted border-b-2 pb-4 font-semibold">
        Issues
      </h4>
      <div className="divide-border-muted flex flex-col gap-6 divide-y-2">
        <IssuesDropDownContent />
      </div>
    </div>
  );
}
