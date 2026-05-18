import { Button } from "@repo/ui/components/button";
import { Logo } from "@repo/ui/components/logo";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <div>
        <div className=" px-12 py-4 bg-[#f5f3f4] ">
          <Logo />
        </div>
        <div className=" w-full flex flex-col items-center   mt-24 ">
          <div className="max-w-[50rem]">

            <h1 className="  text-5xl  text-center ">Deep Crawl Analysis with Crawllytics for Better Rankings</h1>
            <p className=" text-md text-center mt-4 px-16  ">Crawllytics helps businesses and developers analyze websites with deep crawling, technical SEO audits, and real-time insights to improve search rankings and website performance.</p>

            <div className=" flex items-center justify-center w-full   ">
              <div className=" border-[0.8px]  border-border rounded-lg overflow-hidden flex gap-1 justify-between px-2 py-px w-[30rem] h-12 mt-16  ">

                <input type="text" name="" id="" className=" w-full  outline-none " placeholder="Enter the URL......." />
                <Button variant="primary" >
                  Start
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className=" mt-8 px-40  w-full h-12 ">
            <div >
              <Image src={"/landingPage.png"} alt="landing page" height={400} width={400}
                className=" w-full h-[30rem] "
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
