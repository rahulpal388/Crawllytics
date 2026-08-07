import { Select } from "@repo/ui/components/select";
import { Dispatch, SetStateAction } from "react";
import { SelectOptionsType } from "@repo/ui/components/select";
import {
  SeverityType,
  CategoryType,
  StatusType,
  ImpactType,
} from "@repo/config/types/apiResponseType/issuesTypes";

const severityOptions: SelectOptionsType<SeverityType>[] = [
  { label: "All", id: "all" },
  { label: "Critical", id: "critical" },
  { label: "High", id: "high" },
  { label: "Medium", id: "medium" },
  { label: "Low", id: "low" },
];

const categoryOptions: SelectOptionsType<CategoryType>[] = [
  { label: "All", id: "all" },
  { label: "Performance", id: "performance" },
  { label: "Accessibility", id: "accessibility" },
  { label: "Best Practices", id: "best-practices" },
  { label: "SEO", id: "seo" },
  { label: "Metadata", id: "metadata" },
  { label: "Security", id: "security" },
  { label: "Content", id: "content" },
  { label: "Links", id: "links" },
  { label: "Crawlability", id: "crawlability" },
  { label: "Structured Data", id: "structured-data" },
  { label: "Other", id: "other" },
];

const statusOptions: SelectOptionsType<StatusType>[] = [
  { label: "All", id: "all" },
  { label: "Open", id: "open" },
  { label: "Closed", id: "closed" },
  { label: "In Progress", id: "in-progress" },
];

const impactOptions: SelectOptionsType<ImpactType>[] = [
  { label: "All", id: "all" },

  { label: "High", id: "high" },
  { label: "Medium", id: "medium" },
  { label: "Low", id: "low" },
];

export type IssuesFilter = {
  severity: SeverityType;
  category: CategoryType;
  status: StatusType;
  impact: ImpactType;
};

type IssuesFilterActionsProps = {
  selected: IssuesFilter;
  setSelected: Dispatch<SetStateAction<IssuesFilter>>;
};

export function IssuesFilterActions({
  selected,
  setSelected,
}: IssuesFilterActionsProps) {
  return (
    <>
      <div className="flex gap-4">
        <Select
          value={selected["severity"]}
          onValueChange={(value) =>
            setSelected({ ...selected, severity: value })
          }
          options={severityOptions}
          title="Severity"
        />

        <Select
          value={selected["status"]}
          onValueChange={(value) => setSelected({ ...selected, status: value })}
          options={statusOptions}
          title="Status"
        />
        <Select
          value={selected["impact"]}
          onValueChange={(value) => setSelected({ ...selected, impact: value })}
          options={impactOptions}
          title="Impact"
        />
        <Select
          value={selected["category"]}
          onValueChange={(value) =>
            setSelected({ ...selected, category: value })
          }
          options={categoryOptions}
          title="Category"
        />
      </div>
    </>
  );
}
