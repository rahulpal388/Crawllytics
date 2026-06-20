import Image from "next/image";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { HeroInput } from "../components/hero-section/heroInput";
import { HeroImage } from "../components/hero-section/heroImage";

export function HeroSection() {
  return (
    <>
      <div className="hero-bg flex h-[50rem] w-full flex-col items-center overflow-hidden pt-32">
        <div className="border-border-default bg-surface-muted flex items-center gap-3 rounded-sm px-4 py-[6px] shadow-sm backdrop-blur-md">
          <div className="relative flex items-center justify-center">
            {/* Ping */}
            <span className="bg-primary absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75" />

            {/* Dot */}
            <span className="bg-primary relative inline-flex h-3 w-3 rounded-full" />
          </div>

          <p className="text-text-primary text-xs">
            Instant SEO diagnostics for any URL
          </p>
        </div>
        <div className="mt-4 max-w-[50rem]">
          <h1 className="text-text-primary text-center text-5xl font-semibold tracking-tighter">
            Deep Crawl Analysis with Crawllytics for Better Rankings
          </h1>

          <p className="text-text-tertiary px-16 pt-4 text-center text-lg">
            Crawllytics helps businesses and developers analyze websites with
            deep crawling, technical SEO audits, and real-time insights to
            improve search rankings and website performance.
          </p>

          <div className="mt-8 flex w-full items-center justify-center">
            <HeroInput />
          </div>
        </div>

        <div className="mt-8 h-12 w-full px-40">
          <HeroImage />
        </div>
      </div>
    </>
  );
}
