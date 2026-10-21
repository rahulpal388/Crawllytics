import { CircleHelp } from "lucide-react";

export function TechnicalAuditCard() {
  return (
    <section className="border-border-muted border-b p-5 xl:border-r xl:border-b-0" aria-labelledby="technical-audit-title">
      <div className="flex items-center justify-between gap-3">
        <h2 id="technical-audit-title" className="heading-6">
          Technical audit
        </h2>
        <CircleHelp size={16} className="text-text-secondary" aria-hidden="true" />
      </div>
      <p className="caption mt-4">
        Technical metrics will appear after crawl results are available.
      </p>
      <div className="bg-surface-subtle text-text-secondary mt-5 rounded-md p-3 text-sm">
        No technical data available
      </div>
    </section>
  );
}
