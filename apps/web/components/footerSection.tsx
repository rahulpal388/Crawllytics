import { Container } from "@repo/ui/components/container";
import { HeroInput } from "./hero-section/heroInput";

import { CodeXml } from "lucide-react";
import { Logo } from "./logo";

export function FooterSection() {
  return (
    <>
      <Container>
        <div className="border-border-default max-footer:flex-col flex gap-8 border-t pt-12 pb-20">
          <div className="max-footer:order-2 flex max-w-[24rem] flex-col gap-6">
            <Logo />
            <p className="subHeading text-sm">
              Analyze, monitor, and improve your website with actionable SEO
              insights.
            </p>
          </div>
          <div className="flex-1/4">
            <h3 className="heading">Ready to Analyze Your Website?</h3>
            <p className="subHeading text-sm!">
              Enter your website URL and discover opportunities to improve your
              search visibility.
            </p>
            <HeroInput className="mt-4 px-6" />
          </div>
        </div>
        <div className="border-border-default flex items-center justify-between gap-8 border-t p-6">
          <div>
            <p className="subHeading xs:text-sm text-xs opacity-90">
              © {new Date().getFullYear()} Crawllytics. All rights reserved.
            </p>
          </div>
          <a
            href="https://github.com/rahulpal388/Crawllytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary! flex items-center gap-2 text-sm hover:opacity-85"
          >
            <CodeXml size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </Container>
    </>
  );
}
