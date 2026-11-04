import { Button } from "@repo/ui/components/button";
import { BarChart3 } from "lucide-react";

export function GoogleAnalytic() {
  return (
    <section className="p-5" aria-labelledby="google-analytics-title">
      <h2 id="google-analytics-title" className="heading-6">
        Google Analytics
      </h2>
      <p className="caption mt-4">
        Connect Analytics to understand user engagement and organic performance.
      </p>
      <Button variant="outline" className="mt-5 w-full justify-start" disabled>
        <BarChart3 size={16} />
        Connect Google Analytics (TODO)
      </Button>
    </section>
  );
}
