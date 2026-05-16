import { fetchWebPage } from "@/fetchWebPage.js";
import { eachUrlNetwork } from "@/networkAnalyses/eachUrlNetwork.js";
import { EachUrlNetworkResultTypes } from "@/types/eachUrlNetwork.js";




export async function crawler(url: URL): Promise<{
    internalLinks: string[]
    eachUrlNetworkAnalyses?: EachUrlNetworkResultTypes
}> {
    const { success, data } = await fetchWebPage(url);
    if (!success) {
        return {
            internalLinks: []
        };
    }

    const urlNetworkAnalyses = eachUrlNetwork(data.response);

    console.log(urlNetworkAnalyses);

    // ⚠️ check the crawability of the url and set the crawlability in requestLayedData
    // const htmlLayedData = HtmlLayerDataExtactor(data.html, url);
    return {
        internalLinks: [], // htmlLayedData.links.internal,
        eachUrlNetworkAnalyses: urlNetworkAnalyses
    }
}

