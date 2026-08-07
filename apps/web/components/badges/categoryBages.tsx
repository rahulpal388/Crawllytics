import { CategoryType } from "@repo/config/types/apiResponseType/issuesTypes";

const categoryBadges: Record<
  Exclude<CategoryType, "all">,
  {
    label: string;
  }
> = {
  performance: {
    label: "Performance",
  },
  accessibility: {
    label: "Accessibility",
  },
  "best-practices": {
    label: "Best Practices",
  },
  seo: {
    label: "SEO",
  },
  metadata: {
    label: "Metadata",
  },
  security: {
    label: "Security",
  },
  content: {
    label: "Content",
  },
  links: {
    label: "Links",
  },
  crawlability: {
    label: "Crawlability",
  },
  "structured-data": {
    label: "Structured Data",
  },
  other: {
    label: "Other",
  },
};

export function CategoryBadges({
  category,
}: {
  category: Exclude<CategoryType, "all">;
}) {
  return (
    <>
      <div className="caption w-fit rounded-md bg-blue-50 px-4 py-[1.6px] text-blue-600">
        {categoryBadges[category].label}
      </div>
    </>
  );
}
