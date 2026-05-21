import { FeatureCardProps } from "../types/featureCardProps";



export function FeatureCards({ title, description, icon, about }: FeatureCardProps) {
    return <>
        <div className="  w-full h-fulll bg-[#FFFFFF] hover:bg-[#F7FAFA]   border-border rounded-lg p-4  flex flex-col gap-2 border border-border-subtle  ">
            <div className=" size-10 flex items-center justify-center 
            bg-[#E6FAF8] px-2 py-[2px] border-[1px] border-border-subtle  rounded ">
                {icon}
            </div>
            <div >
                <h3 className=" text-xl font-semibold  ">{title}</h3>
                <p className=" text-sm text-[#4B6378] ">{description}</p>
            </div>
            <div className=" flex items-center gap-2  flex-wrap ">
                {
                    about.map((item) => <p key={item} className=" text-sm  bg-[#FFFFFF]/60 hover:bg-[#F7FAFA] text-[#2CB8AC] px-2 py-[2px] border-[1px] border-border-subtle  rounded ">{item}</p>)
                }
            </div>
        </div>
    </>
}