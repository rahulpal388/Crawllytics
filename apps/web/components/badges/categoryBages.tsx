import { CategoryType } from "@repo/contracts/types/analysesTypes/DynamicRule.Type";

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
  indexability: {
    label: "Indexability",
  },
  "social-sharing": {
    label: "Social Sharing",
  },
};

export function CategoryBadges({
  category,
}: {
  category: Exclude<CategoryType, "all">;
}) {
  return (
    <>
      <div className="caption-xs w-fit rounded-md bg-blue-50 px-4 py-[1.6px] text-blue-600">
        {categoryBadges[category].label}
      </div>
    </>
  );
}
