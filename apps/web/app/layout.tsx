import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./context/providers";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background-light
 `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}