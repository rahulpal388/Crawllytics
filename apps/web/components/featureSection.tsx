import { Container } from "@repo/ui/components/container";
import { FeatureCardProps } from "@repo/ui/types/featureCardProps";
import { FeatureCards } from "./feature-section/featureCards";
import { featuresItems } from "../constant/featureItems";

export function FeatureSection() {
  return (
    <>
      <Container>
        <div className="py-8">
          <div className="section-content flex flex-col gap-4">
            <h2 className="heading text-5xl">
              Comprehensive SEO Intelligence for Modern Websites
            </h2>
            <p className="subHeading">
              Get complete visibility into your website with page-level
              analysis, technical audits, content insights, internal linking
              intelligence, and actionable recommendations.
            </p>
          </div>
          <div className="divide-border-default mt-12 flex flex-col gap-4 divide-y">
            {featuresItems.map((items, index) => (
              <FeatureCards
                key={items.title}
                {...items}
                index={index}
                className="py-16"
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
