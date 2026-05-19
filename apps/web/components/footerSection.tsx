import { Logo } from "@repo/ui/components/logo";


export function FooterSection() {
    return <>
        <div className=" py-8 px-32   h-full bg-neutral-400  flex gap-2  justify-between   ">
            <div className=" w-[20rem] ">
                <Logo />
                <p className=" text-sm mt-2 " >Crawllytics is a powerful web crawling and SEO analysis tool that helps businesses and developers optimize their websites for better search engine rankings and improved performance.</p>
            </div>
            <div>
                <h3 className=" font-bold ">Products</h3>
                <ul className=" mt-2 ">
                    <li>Home</li>
                    <li>Features</li>
                    <li>How It Works</li>
                </ul>
            </div>
            <div>
                <h3 className=" font-bold ">Company</h3>
                <ul className=" mt-2 ">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </>
}