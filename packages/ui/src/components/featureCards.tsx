import { FeatureCardProps } from "../types/featureCardProps";



export function FeatureCards({ title, description, icon, about }: FeatureCardProps) {
    return <>
        <div className="  w-full h-fulll bg-background-light border-border rounded-lg p-4  flex flex-col gap-2 ">
            <div className=" size-10 flex items-center justify-center bg-neutral-300/60 px-2 py-[2px] border-[1px] border-border  rounded ">
                {icon}
            </div>
            <div >
                <h3 className=" text-xl font-semibold  ">{title}</h3>
                <p className=" text-sm ">{description}</p>
            </div>
            <div className=" flex items-center gap-2  flex-wrap ">
                {
                    about.map((item) => <p key={item} className=" text-sm bg-neutral-300/60 px-2 py-[2px] border-[1px] border-border  rounded ">{item}</p>)
                }
            </div>
        </div>
    </>
}