import { StatsCard } from "@repo/ui/components/statsCard";
import { Container } from "@repo/ui/components/container";

const landingPageStatsData = [
  {
    name: "Users",
    value: "10K+",
  },
  {
    name: "Websites Analyzed",
    value: "50K+",
  },
  {
    name: "Pages Crawled",
    value: "1M+",
  },
  {
    name: "Accuracy Rate",
    value: "98%",
  },
];

export function LandingPageStats() {
  return (
    <>
      <Container>
        <div className="bg-card-background w-full py-12 pl-4">
          <div className="max-w-2xl">
            <h2 className="text-text-primary text-3xl font-semibold tracking-tighter">
              Helping Thousands of Users Understand Their Websites
            </h2>
            <p className="text-text-secondary mt-4 text-lg">
              Analyze websites, uncover technical SEO issues, and gain the
              insights needed to improve search visibility.
            </p>
          </div>
          <div className="border-border-default mx-auto mt-8 flex h-full max-w-7xl items-center justify-center gap-48 border-t-[0.8px] border-b-[0.8px] py-8">
            {landingPageStatsData.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center gap-2"
              >
                <StatsCard value={item.value} title={item.name} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
