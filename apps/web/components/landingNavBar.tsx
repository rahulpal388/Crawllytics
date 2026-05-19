import { Button } from "@repo/ui/components/button"
import { Logo } from "@repo/ui/components/logo"
import { ArrowBigRight, ArrowRight } from "lucide-react"


const navBarItems = [{
    name: "Home",
    href: "/"
},
{
    name: "Features",
    href: "/features"
},
{
    name: "How it works",
    href: "/how-it-works"
}
]


export function LandingNavBar() {


    return <>
        <div className=" w-full flex items-center justify-between  px-12 ">
            <div>
                <Logo />
            </div>
            <div className=" flex items-center justify-between gap-8 ">
                {navBarItems.map((item) => <a key={item.name} href={item.href}>{item.name}</a>)}
            </div>

            <div>
                <Button variant="outline" >
                    Sign in
                </Button>
            </div>
        </div>
    </>
}