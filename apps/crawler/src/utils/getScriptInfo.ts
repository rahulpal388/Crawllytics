import { ScriptType } from "@repo/config/types/urlInformationType/performanceSignalTypes";
import * as Cheerio from "cheerio";

export function getScriptInfo($: Cheerio.CheerioAPI, url: URL): ScriptType[] {
    const scripts: ScriptType[] = []

    $("script").each((_, element) => {
        const src = $(element).attr("src") || null;
        const isInline = !src;
        const isAsync = $(element).attr("async") !== undefined;
        const isDefer = $(element).attr("defer") !== undefined;
        const isModule = $(element).attr("type") === "module";
        const isRenderBlocking =
            !!src &&
            !isAsync &&
            !isDefer &&
            !isModule;
        const domain = src ? new URL(src, url.origin).hostname : null;
        const isThirdParty = domain ? domain !== url.hostname : false;

        scripts.push({
            src,
            isInline,
            isAsync,
            isDefer,
            isModule,
            isRenderBlocking,
            isThirdParty,
            domain
        })
    })
    return scripts;
}