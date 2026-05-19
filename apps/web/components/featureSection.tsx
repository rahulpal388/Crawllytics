import { FeatureCards } from "@repo/ui/components/featureCards";
import { FeatureCardProps } from "@repo/ui/types/featureCardProps";
import { Globe } from "lucide-react";


const featuresItems: FeatureCardProps[] = [{
    title: "Page Speed & Core Web Vitals",
    description: "Measure loading performance, rendering stability, and responsiveness to identify speed bottlenecks affecting rankings and user experience.",

    icon: <Globe />,
    about: ["LCP", "CLS", "FID", "TTFB"]
},
{
    title: "On-Page SEO Audit",
    description: "Analyze titles, headings, metadata, keyword usage, internal linking, and content structure to improve on-page optimization.",
    icon: <Globe />,
    about: ["Title Tags", "Meta Descriptions", "Header Tags", "Keyword Analysis"]
},
{
    title: "Technical SEO Crawl",
    description: "Detect crawlability issues, broken links, redirect chains, duplicate content, canonical conflicts, and sitemap problems.",
    icon: <Globe />,
    about: ["Crawl Errors", "Redirects", "Duplicate Content", "Sitemaps", "Canonicals"]
},
{
    title: "Backlink Profile Analysis",
    description: "Track backlinks, evaluate domain authority, detect toxic links, and monitor link growth to strengthen off-page SEO performance.",
    icon: <Globe />,
    about: ["Backlink", "DA Score", "Toxic Links", "Anchors"]
},
{
    title: "Mobile & UX Signals",
    description: "Audit mobile responsiveness, viewport settings, tap targets, readability, and usability issues impacting mobile-first indexing.",
    icon: <Globe />,
    about: ["Mobile-Friendly", "Viewport", "Readability", "UX Score"]
},
{
    title: "Keyword & SERP Tracking",
    description: "Monitor keyword rankings, visibility trends, SERP movements, and competitor positioning across search results.",
    icon: <Globe />,
    about: ["Keyword Rankings", "Visibility Score", "SERP Trends"]
}

]

export function FeatureSection() {

    return <>
        <div className=" py-8 px-12 ">
            <div className=" max-w-[40rem] ">
                <h2 className=" text-3xl font-semibold  " >Complete SEO Intelligence Platform</h2>
                <p className=" text-sm mt-2 " >Analyze performance, monitor rankings, audit technical SEO, and optimize every page for better search visibility.</p>
            </div>
            <div>

                <div className=" grid grid-cols-3 gap-4 mt-8  ">
                    {
                        featuresItems.map((items) => (
                            <FeatureCards key={items.title} {...items} />
                        ))
                    }
                </div>

            </div>
        </div>
    </>
}