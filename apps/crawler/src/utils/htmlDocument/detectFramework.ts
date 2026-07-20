import * as cheerio from "cheerio";

export function detectFrameworks($: cheerio.CheerioAPI): string[] {
  const frameworks = new Set<string>();

  if ($("#__next").length || $("script#__NEXT_DATA__").length) frameworks.add("Next.js");

  if ($("#root").length) frameworks.add("React");

  if ($("#app").length && $("[data-v-app]").length) frameworks.add("Vue");

  if ($("[ng-version]").length) frameworks.add("Angular");

  if ($("#__nuxt").length) frameworks.add("Nuxt");

  if ($("[data-sveltekit]").length) frameworks.add("SvelteKit");

  if ($("astro-island").length) frameworks.add("Astro");

  return [...frameworks];
}
