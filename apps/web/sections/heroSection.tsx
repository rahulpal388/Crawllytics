import Image from "next/image";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { HeroInput } from "../components/hero-section/heroInput";
import { HeroImage } from "../components/hero-section/heroImage";

export function HeroSection() {
  return (
    <>
      <div className="hero-bg xs:h-[50rem] flex h-[42rem] w-full flex-col items-center overflow-hidden pt-32">
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
        <div className="mt-4 max-w-[40rem] lg:max-w-[50rem]">
          <h1 className="heading xs:text-3xl text-center text-2xl sm:text-5xl">
            Deep Crawl Analysis with Crawllytics for Better Rankings
          </h1>

          <p className="subHeading xs:px-16 px-8 pt-4 text-center text-sm">
            Crawllytics helps businesses and developers analyze websites with
            deep crawling, technical SEO audits, and real-time insights to
            improve search rankings and website performance.
          </p>

          <div className="mt-8 flex w-full items-center justify-center px-4">
            <HeroInput className="xs:w-full flex w-[24rem]" />
          </div>
        </div>
        <div className="mt-8 h-full px-4 sm:px-8 md:px-12 lg:px-20">
          <HeroImage />
        </div>
      </div>
    </>
  );
}
