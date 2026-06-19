import { IncomingMessage } from "node:http";
import { urlDeDuplicateStore } from "@/index.js";
import { RedirectChainType } from "@repo/config/types/urlInformationType/eachUrlNetworkTypes";

const MAX_REDIRECTS = 3;


type RedirectResult = {
    isRedirect: boolean;
    redirectUrl: string | null;
    isRedirectLoop: boolean;
    attemptedRedirects: number;
}


export async function handleRedirect(res: IncomingMessage, redirectChain: RedirectChainType[]): Promise<RedirectResult> {
    const location = res.headers["location"];
    if (!location || typeof location !== "string") {
        return { isRedirect: false, redirectUrl: null, isRedirectLoop: false, attemptedRedirects: redirectChain.length };
    }

    const isMaxRedirectsReached = redirectChain.length >= MAX_REDIRECTS;
    const isRedirectLoop = redirectChain.some(redirect => redirect.redirectedTo === location);
    if (isRedirectLoop || isMaxRedirectsReached) {
        return { isRedirect: false, redirectUrl: location, isRedirectLoop, attemptedRedirects: redirectChain.length };
    }

    return { isRedirect: true, redirectUrl: location, isRedirectLoop, attemptedRedirects: redirectChain.length };
}
