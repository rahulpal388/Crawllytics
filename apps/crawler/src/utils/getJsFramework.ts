import * as Cheerio from "cheerio"

export function getJsFramework($: Cheerio.CheerioAPI): string[] {
    const jsFrameworks: string[] = [];

    if ($("#__next").length || $('script[id="__NEXT_DATA__"]').length) {
        jsFrameworks.push("Next.js");
    }

    if ($("#root").length || $('[data-reactroot]').length) {
        jsFrameworks.push("React");
    }

    if ($("#app").length) {
        jsFrameworks.push("Vue");
    }

    if ($("#__nuxt").length || $("#nuxt").length) {
        jsFrameworks.push("Nuxt");
    }

    if ($("app-root").length) {
        jsFrameworks.push("Angular");
    }

    return jsFrameworks;
}