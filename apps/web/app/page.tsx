'use client';
import { Button } from "@repo/ui/components/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { LandingNavBar } from "../components/landingNavBar";
import { FeatureSection } from "../components/featureSection";
import { LandingPageStats } from "../components/landingPageStats";
import { HowItWorks } from "../components/howItWorks";
import { SampleReportSection } from "../components/sampleReportSection";
import { FooterSection } from "../components/footerSection";



export default function Home() {
  return (
    <>
      <div className=" w-full h-full ">
        <div className="  w px-12 py-4 bg-[#AAEEE8]/40 border-b border-border-subtle  ">

          <LandingNavBar />
        </div>
        <div
          className="w-full h-[50rem] overflow-hidden flex flex-col items-center pt-24 "
          style={{
            backgroundImage: `
    linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px),
   radial-gradient(circle, rgba(59,130,246,0.4) 10%, transparent 80%)
  `,
            backgroundSize: "60px 60px, 60px 60px, 100% 100%",
            maskImage:
              "radial-gradient(circle at center,white 40%, black 30%, transparent 90%)",
          }}
        >
          <div
            className="
    flex
    items-center
    gap-3

    rounded-xl
    border
    border-border/60

    bg-background-light/70
    backdrop-blur-md

    px-4
    py-[6px]
  "
          >
            <div className="relative flex items-center justify-center">
              {/* Ping */}
              <span
                className="
        absolute
        inline-flex
        h-3
        w-3
        rounded-full
        bg-emerald-500
        opacity-75
        animate-ping
      "
              />

              {/* Dot */}
              <span
                className="
        relative
        inline-flex
        h-3
        w-3
        rounded-full
        bg-emerald-500
      "
              />
            </div>

            <p className="text-sm text-foreground/80">
              Instant SEO diagnostics for any URL
            </p>
          </div>
          <div className="max-w-[50rem] "

          >
            <h1 className="text-5xl text-center">
              Deep Crawl Analysis with Crawllytics for Better Rankings
            </h1>

            <p className="text-md text-center mt-4 px-16">
              Crawllytics helps businesses and developers analyze websites with deep
              crawling, technical SEO audits, and real-time insights to improve search
              rankings and website performance.
            </p>

            <div className="flex items-center justify-center w-full">
              <div className="border-[0.8px] border-border rounded-lg overflow-hidden flex gap-1 justify-between pl-2 py-px w-[30rem] h-12 mt-16 bg-white">
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                  placeholder="(eg: https://www.example.com) "
                />

                <Button variant="primary" className=" w-[12rem] ">
                  Analyze Now
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 px-40 w-full h-12">
            <div>
              <Image
                src={"/landingPage.png"}
                alt="landing page"
                height={400}
                width={400}
                className="w-full h-[30rem] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className=" mt-12 ">

          <LandingPageStats />
        </div>
        <FeatureSection />
        <HowItWorks />
        <SampleReportSection />
        <FooterSection />
      </div>
    </>
  );
}
