import { CircleHelp } from "lucide-react";

export function SiteAuditCard() {
  return (
    <section className="border-border-muted border-b p-5 md:border-r xl:border-b-0" aria-labelledby="site-audit-title">
      <div className="flex items-center justify-between gap-3">
        <h2 id="site-audit-title" className="heading-6">
          Site audit
        </h2>
        <CircleHelp size={16} className="text-text-secondary" aria-hidden="true" />
      </div>
      <p className="caption mt-4">
        Audit metrics will appear after this project completes its first crawl.
      </p>
      <div className="bg-surface-subtle text-text-secondary mt-5 rounded-md p-3 text-sm">
        No audit data available
      </div>
    </section>
  );
}
