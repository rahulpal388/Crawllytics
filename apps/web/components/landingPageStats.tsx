

const landingPageStatsData = [
    {
        name: "Users",
        value: "10K+"
    },
    {
        name: "Websites Analyzed",
        value: "50K+"
    },
    {
        name: "Pages Crawled",
        value: "1M+"
    },
    {
        name: "Accuracy Rate",
        value: "98%"
    }
]


export function LandingPageStats() {
    return <>
        <div className=" w-full h-48 bg-card-background ">
            <div className=" max-w-7xl mx-auto h-full flex items-center justify-center gap-48">
                {
                    landingPageStatsData.map((item) => <div key={item.name} className=" flex flex-col items-center justify-center gap-2 ">
                        <p className=" text-3xl font-bold ">{item.value}</p>
                        <p className=" text-md ">{item.name}</p>
                    </div>)
                }
            </div>

        </div>
    </>
}