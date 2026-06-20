import Image from "next/image";
import { Button } from "@repo/ui/components/button";


export function HeroSection() {
    return <>
        <div
            className="w-full h-[50rem] overflow-hidden flex flex-col items-center pt-40 hero-bg "

        >
            <div
                className="
        flex
        items-center
        gap-3
    
        rounded-sm
       border-border-default shadow-sm
    
        bg-surface-muted
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
            bg-primary
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
            bg-primary
          "
                    />
                </div>

                <p className="text-xs text-text-primary  ">
                    Instant SEO diagnostics for any URL
                </p>
            </div>
            <div className="max-w-[50rem] mt-4 "

            >
                <h1 className="text-5xl text-center  text-text-primary ">
                    Deep Crawl Analysis with Crawllytics for Better Rankings
                </h1>

                <p className="text-lg  text-center text-text-tertiary pt-4 px-16">
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
    </>
}