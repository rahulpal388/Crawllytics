import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../context/providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crawllytics — Technical SEO Analyzer & Website Crawler",
  description:
    "Crawllytics is a web-based SEO analysis tool that crawls websites, evaluates technical and on-page SEO factors, and provides actionable insights to improve search engine visibility. It simulates how search engine bots crawl a website, analyzes page structure, internal linking, metadata, performance metrics, and generates a comprehensive SEO audit report.",
  keywords: [
    "seo-analyzer",
    "seo-audit",
    "website-crawler",
    "technical-seo",
    "seo-dashboard",
    "link-analysis",
    "site-audit-tool",
    "web-scraper",
    "metadata-analysis",
    "broken-link-checker",
    "seo-report",
    "website-health-check",
    "internal-link-analysis",
    "external-link-analysis",
    "crawl-depth-analysis",
    "html-parsing",
    "content-analysis",
    "page-performance-analysis",
    "nodejs-project",
    "react-dashboard",
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
