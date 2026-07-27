import { Card } from "@repo/ui/components/card";

export function ScoresCards() {
  return (
    <>
      <div className="grid w-[56rem] grid-cols-3 flex-wrap gap-4">
        <Card title="SEO Score" value="38" />
        <Card title="SEO Score" value="38" />
        <Card title="SEO Score" value="38" />
        <Card title="SEO Score" value="38" />
      </div>
    </>
  );
}
