import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "../logo";

type AuthLayoutProps = {
  children: ReactNode;
  alternatePrompt: string;
  alternateLabel: string;
  alternateHref: string;
};

export function AuthLayout({
  children,
  alternatePrompt,
  alternateLabel,
  alternateHref,
}: AuthLayoutProps) {
  return (
    <main className="bg-surface-base h-dvh overflow-hidden lg:grid lg:grid-cols-[minmax(25rem,0.9fr)_minmax(32rem,1.1fr)]">
      <section className="flex h-dvh min-h-0 flex-col overflow-hidden px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
        <Link href="/" aria-label="Crawllytics home" className="w-fit">
          <Logo />
        </Link>

        <div className="flex flex-1 items-center justify-center py-12 lg:py-16">
          <div className="w-full max-w-md">
            {children}
            <p className="text-text-secondary mt-8 text-center text-sm">
              {alternatePrompt}{" "}
              <Link
                href={alternateHref}
                className="text-primary focus-visible:outline-primary font-medium hover:underline focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {alternateLabel}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <aside className="bg-surface-muted relative hidden h-dvh overflow-hidden lg:block">
        <Image
          src="/auth-image.png"
          alt="Crawllytics SEO analytics dashboard"
          height={1080}
          width={1920}
          priority
          sizes="55vw"
          className="absolute bottom-32 left-12 w-full origin-left object-cover object-bottom"
        />
      </aside>
    </main>
  );
}
