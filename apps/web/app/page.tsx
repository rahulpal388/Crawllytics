"use client";
import { Button } from "@repo/ui/components/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { LandingNavBar } from "../components/landingNavBar";
import { FeatureSection } from "../components/featureSection";
import { LandingPageStats } from "../components/landingPageStats";
import { HowItWorks } from "../components/howItWorks";
import { SampleReportSection } from "../components/sampleReportSection";
import { FooterSection } from "../components/footerSection";
import { HeroSection } from "../sections/heroSection";

export default function Home() {
  return (
    <>
      <div className="h-full w-full">
        <div className="w border-border-default bg-surface-muted fixed top-0 left-0 z-50 w-full border-b px-12 py-4">
          <LandingNavBar />
        </div>
        <HeroSection />
        <div className="mt-12">
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
