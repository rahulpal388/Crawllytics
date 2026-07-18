export const tempHtml = `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="An introduction to CSS selectors.">
	<meta name="keywords" content="htmlparser, jquery, selector, scraper, parser, dom, xml, html, nodejs">
	<link rel="icon" type="image/x-icon" href="/img/favicon.ico">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link
	href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500&display=swap"
	rel="stylesheet">
	<title>Selecting Elements | Cheerio</title>
	<meta name="astro-view-transitions-enabled" content="true">
	<meta name="astro-view-transitions-fallback" content="animate">
	<meta property="og:image" content="https://www.youtube.com/img/desktop/yt_1200.png">
	<script type="module" src="/_astro/ClientRouter.astro_astro_type_script_index_0_lang.j56hQv-j.js"></script>
	<link rel="stylesheet" href="/_astro/Navbar.D9sEVnbo.css">
	<link rel="stylesheet" href="/_astro/Navbar.D3huzBwt.css">
	<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
   {
     "@type":"ListItem",
     "position":1,
     "name":"Home",
     "item":"https://example.com"
   },
   {
     "@type":"ListItem",
     "position":2,
     "name":"Phones",
     "item":"https://example.com/phones"
   }
 ]
}
</script>
	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Title of a News Article",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "datePublished": "2024-01-05T08:00:00+08:00",
      "dateModified": "2024-02-05T09:20:00+08:00",
      "author": [{
          "@type": "Person",
          "name": "Jane Doe",
          "url": "https://example.com/profile/janedoe123"
        },{
          "@type": "Person",
          "name": "John Doe",
          "url": "https://example.com/profile/johndoe123"
      }]
    }
    </script>
	<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Product",
  "name":"iPhone 17",
  "offers":{
    "@type":"Offer",
    "price":"999",
    "priceCurrency":"USD"
  }
}
</script>
</head>

<body class="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
	<nav
		class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
			<div class="flex items-center gap-10"> <a href="/" class="group flex items-center gap-2.5"> <img src="/_astro/orange-c.LpIsIfBH_Z1HYzg2.svg" alt="Cheerio Logo" loading="lazy" decoding="async" width="400" height="400" class="h-8 w-8 transition-transform duration-300 group-hover:rotate-[-8deg]">
					<span class="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Cheerio</span>
				</a>
				<div class="hidden items-center gap-1 md:flex"> <a href="/docs/intro"
						class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors bg-primary/10 text-primary">
						Learn </a><a href="/docs/api"
						class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
						API </a><a href="/blog"
						class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
						Blog </a> </div>
			</div>
			<div class="flex items-center gap-3">
				<!-- DocSearch container -->
				<div id="docsearch"></div> <a href="https://github.com/cheeriojs/cheerio" target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
					aria-label="GitHub"> <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
						</path>
					</svg> </a> <!-- Mobile menu button -->
				<button type="button" class="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-slate-400 dark:hover:bg-slate-800" aria-label="Open menu" id="mobile-menu-button"> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path> </svg> </button>
			</div>
		</div> <!-- Mobile menu -->
		<div id="mobile-menu"
			class="hidden border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-900">
			<div itemscope itemtype="https://schema.org/Product">
    <span itemprop="name">iPhone 17</span>
</div>
			<div class="space-y-1 px-4 pb-4 pt-2"> <a href="/docs/intro"
					class="block rounded-lg px-3 py-2.5 text-sm font-medium bg-primary/10 text-primary"> Learn </a><a
					href="/docs/api"
					class="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
					API </a><a href="/blog"
					class="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
					Blog </a> </div>
		</div>
	</nav>
	<script type="module">
		function o(){const e=document.getElementById("mobile-menu-button"),n=document.getElementById("mobile-menu");if(e&&n){const t=e.cloneNode(!0);e.replaceWith(t),t.addEventListener("click",()=>{n.classList.toggle("hidden")})}}o();window.__cheerio_mobile_menu_swap||(window.__cheerio_mobile_menu_swap=!0,document.addEventListener("astro:after-swap",o));
	</script>
	<script type="module" src="/_astro/Navbar.astro_astro_type_script_index_1_lang.SnbJQh1u.js"></script>
	<div class="mx-auto flex w-full max-w-screen-2xl flex-1">
		<aside class="hidden w-64 shrink-0 border-r border-slate-200 dark:border-slate-700 lg:block">
			<nav class="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-6 py-8">
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Getting Started </h3>
					<ul class="space-y-1">
						<li> <a href="/docs/intro"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Introduction </a> </li>
					</ul>
				</div>
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Basics </h3>
					<ul class="space-y-1">
						<li> <a href="/docs/basics/loading"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Loading Documents </a> </li>
						<li> <a href="/docs/basics/selecting"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 bg-primary/10 font-semibold text-primary border-l-2 border-primary">
								Selecting Elements </a> </li>
						<li> <a href="/docs/basics/traversing"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Traversing the DOM </a> </li>
						<li> <a href="/docs/basics/manipulation"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Manipulating Elements </a> </li>
					</ul>
				</div>
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Advanced </h3>
					<ul class="space-y-1">
						<li> <a href="/docs/advanced/configuring-cheerio"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Configuring Cheerio </a> </li>
						<li> <a href="/docs/advanced/extending-cheerio"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Extending Cheerio </a> </li>
						<li> <a href="/docs/advanced/extract"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Extracting Data </a> </li>
					</ul>
				</div>
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Reference
					</h3>
					<ul class="space-y-1">
						<li> <a href="/docs/api"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								API Documentation
							</a> </li>
					</ul>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Classes </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/classes/cheerio"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									Cheerio </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Variables </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/variables/load"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									load </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Functions </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/functions/contains"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									contains </a> </li>
							<li> <a href="/docs/api/functions/decodestream"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									decodeStream </a> </li>
							<li> <a href="/docs/api/functions/fromurl"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									fromURL </a> </li>
							<li> <a href="/docs/api/functions/loadbuffer"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									loadBuffer </a> </li>
							<li> <a href="/docs/api/functions/merge"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									merge </a> </li>
							<li> <a href="/docs/api/functions/stringstream"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									stringStream </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Interfaces </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/interfaces/cheerioapi"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									CheerioAPI </a> </li>
							<li> <a href="/docs/api/interfaces/cheeriooptions"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									CheerioOptions </a> </li>
							<li> <a href="/docs/api/interfaces/cheeriorequestoptions"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									CheerioRequestOptions </a> </li>
							<li> <a href="/docs/api/interfaces/decodestreamoptions"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									DecodeStreamOptions </a> </li>
							<li> <a href="/docs/api/interfaces/htmlparser2options"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									HTMLParser2Options </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Types </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/types/acceptedelems"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									AcceptedElems </a> </li>
							<li> <a href="/docs/api/types/acceptedfilters"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									AcceptedFilters </a> </li>
							<li> <a href="/docs/api/types/basicacceptedelems"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									BasicAcceptedElems </a> </li>
							<li> <a href="/docs/api/types/filterfunction"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									FilterFunction </a> </li>
							<li> <a href="/docs/api/types/selectortype"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									SelectorType </a> </li>
						</ul>
					</details>
				</div>
			</nav>
		</aside>
		<div id="sidebar-overlay" class="fixed inset-0 z-40 hidden bg-black/50 backdrop-blur-sm lg:hidden"></div>
		<aside id="sidebar-drawer"
			class="fixed left-0 top-0 z-50 hidden h-full w-72 -translate-x-full transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden dark:bg-slate-900">
			<div class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
				<span class="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Documentation</span>
				<button type="button" id="sidebar-close" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300" aria-label="Close sidebar"> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button>
			</div>
			<nav class="overflow-y-auto px-6 py-6" style="max-height: calc(100% - 57px);">
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Getting Started </h3>
					<ul class="space-y-1">
						<li> <a href="/docs/intro"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Introduction </a> </li>
					</ul>
				</div>
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Basics </h3>
					<ul class="space-y-1">
						<li> <a href="/docs/basics/loading"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Loading Documents </a> </li>
						<li> <a href="/docs/basics/selecting"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 bg-primary/10 font-semibold text-primary border-l-2 border-primary">
								Selecting Elements </a> </li>
						<li> <a href="/docs/basics/traversing"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Traversing the DOM </a> </li>
						<li> <a href="/docs/basics/manipulation"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Manipulating Elements </a> </li>
					</ul>
				</div>
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Advanced </h3>
					<ul class="space-y-1">
						<li> <a href="/docs/advanced/configuring-cheerio"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Configuring Cheerio </a> </li>
						<li> <a href="/docs/advanced/extending-cheerio"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Extending Cheerio </a> </li>
						<li> <a href="/docs/advanced/extract"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								Extracting Data </a> </li>
					</ul>
				</div>
				<div class="mb-8">
					<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Reference
					</h3>
					<ul class="space-y-1">
						<li> <a href="/docs/api"
								class="block rounded-lg px-3 py-2 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
								API Documentation
							</a> </li>
					</ul>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Classes </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/classes/cheerio"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									Cheerio </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Variables </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/variables/load"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									load </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Functions </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/functions/contains"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									contains </a> </li>
							<li> <a href="/docs/api/functions/decodestream"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									decodeStream </a> </li>
							<li> <a href="/docs/api/functions/fromurl"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									fromURL </a> </li>
							<li> <a href="/docs/api/functions/loadbuffer"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									loadBuffer </a> </li>
							<li> <a href="/docs/api/functions/merge"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									merge </a> </li>
							<li> <a href="/docs/api/functions/stringstream"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									stringStream </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Interfaces </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/interfaces/cheerioapi"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									CheerioAPI </a> </li>
							<li> <a href="/docs/api/interfaces/cheeriooptions"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									CheerioOptions </a> </li>
							<li> <a href="/docs/api/interfaces/cheeriorequestoptions"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									CheerioRequestOptions </a> </li>
							<li> <a href="/docs/api/interfaces/decodestreamoptions"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									DecodeStreamOptions </a> </li>
							<li> <a href="/docs/api/interfaces/htmlparser2options"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									HTMLParser2Options </a> </li>
						</ul>
					</details>
					<details class="group/api mt-2">
						<summary
							class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
							<svg class="h-3 w-3 shrink-0 transition-transform group-open/api:rotate-90" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5">
								</path>
							</svg> Types </summary>
						<ul class="mt-1 space-y-0.5 pl-2">
							<li> <a href="/docs/api/types/acceptedelems"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									AcceptedElems </a> </li>
							<li> <a href="/docs/api/types/acceptedfilters"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									AcceptedFilters </a> </li>
							<li> <a href="/docs/api/types/basicacceptedelems"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									BasicAcceptedElems </a> </li>
							<li> <a href="/docs/api/types/filterfunction"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									FilterFunction </a> </li>
							<li> <a href="/docs/api/types/selectortype"
									class="block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100">
									SelectorType </a> </li>
						</ul>
					</details>
				</div>
			</nav>
		</aside>
		<script type="module">
			function o(){const t=document.getElementById("sidebar-overlay"),e=document.getElementById("sidebar-drawer"),s=document.getElementById("sidebar-close"),n=document.getElementById("sidebar-open");function i(){!t||!e||(t.classList.remove("hidden"),e.classList.remove("hidden"),e.offsetHeight,e.classList.remove("-translate-x-full"),e.classList.add("translate-x-0"),document.body.style.overflow="hidden")}function d(){!t||!e||(e.classList.remove("translate-x-0"),e.classList.add("-translate-x-full"),document.body.style.overflow="",setTimeout(()=>{t.classList.add("hidden"),e.classList.add("hidden")},300))}n&&(n.onclick=i),s&&(s.onclick=d),t&&(t.onclick=d)}o();window.__cheerio_sidebar_swap||(window.__cheerio_sidebar_swap=!0,document.addEventListener("astro:after-swap",o));
		</script>
		<main class="flex-1 min-w-0 px-6 py-10 lg:px-10"> <button type="button" id="sidebar-open" class="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800" aria-label="Open navigation"> <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg>
Menu
</button>
			<header class="mb-8 border-b border-slate-200 pb-6 dark:border-slate-700/50">
				<h1 class="font-display text-3xl text-slate-900 lg:text-4xl dark:text-white">Selecting Elements</h1>
			</header>
			<article class="prose docs-content">
				<h1 id="selecting-elements">Selecting Elements</h1>
				<p>Cheerio allows users to select elements from an HTML document using
					<a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector" target="_blank"
						rel="noopener noreferrer">CSS selectors</a>.
					This allows you to select elements based on criteria such as their tag name,
					class name, and attribute values. This guide provides an overview of how to use
					CSS selectors to retrieve elements.</p>
				<p>To select elements with Cheerio, you first need to import the library and load a
					document. For example:</p>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#79B8FF"> *</span><span style="color:#F97583"> as</span><span style="color:#E1E4E8"> cheerio </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> 'cheerio'</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Load the document using any of the methods described in the "Loading Documents" section.</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> cheerio.</span><span style="color:#B392F0">load</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'&#x3C;html>...&#x3C;/html>'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<p>Once you have loaded the document, you can use the <code>$</code> function to select
					elements. The <code>$</code> function works just like the <code>$</code> function in jQuery, and
					allows you to select elements based on their tag name, class name, and attribute
					values.</p>
				<p>Here are some examples of how to use the <code>$</code> function to select elements:</p>
				<ul>
					<li>To select all the <code>&#x3C;p></code> elements in the document:</li>
				</ul>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $p</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'p'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<div class="admonition admonition-tip" data-type="tip">
					<p class="admonition-title">Tip</p>
					<p>The convention in Cheerio is to prefix the variable name with a $ to indicate
						that it contains a Cheerio object. This is not required, but it is a good
						practice to follow.</p>
				</div>
				<ul>
					<li>To select elements with a specific class name:</li>
				</ul>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $selected</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'.selected'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<ul>
					<li>To select elements with a specific attribute value:</li>
				</ul>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $selected</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'[data-selected=true]'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<div class="admonition admonition-tip" data-type="tip">
					<p class="admonition-title">XML Namespaces</p>
					<p>You can select with XML Namespaces but
						<a href="https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#attribute-selectors"
							target="_blank" rel="noopener noreferrer">due to the CSS specification</a>,
						the colon (<code>:</code>) needs to be escaped for the selector to be valid.</p>
					<pre class="astro-code github-dark"
						style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"
						data-language="js"><code><span class="line"><span style="color:#B392F0">$</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'[xml</span><span style="color:#79B8FF">\\</span><span style="color:#9ECBFF">:id="main"'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				</div>
				<ul>
					<li>Selectors can be combined to select elements that match multiple criteria. For
						example, to select all <code>&#x3C;p></code> elements with the class <code>selected</code>:</li>
				</ul>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $selected</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'p.selected'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<ul>
					<li>Further, you can use spaces (<code> </code>) to select elements that are descendants of
						other elements. For example, to select all <code>&#x3C;p></code> elements that are descendants
						of <code>&#x3C;div></code> elements:</li>
				</ul>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $p</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'div p'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<ul>
					<li>You can also use the <code>></code> character to select elements that are direct
						descendants of other elements. For example, to select all <code>&#x3C;p></code> elements that
						are direct descendants of <code>&#x3C;div></code> elements:</li>
				</ul>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $p</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'div > p'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<p>Please have a look at the documentation of Cheerio’s underlying CSS selector
					library, <code>css-select</code>, for
					<a href="https://github.com/fb55/css-select/blob/master/README.md#supported-selectors"
						target="_blank" rel="noopener noreferrer">a list of all supported selectors</a>.
					For example, to select <code>&#x3C;p></code> elements containing the word “hello”:</p>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $p</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'p:contains("hello")'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<p>Cheerio also supports several jQuery-specific extensions that allow you to
					select elements based on their position in the document. For example, to select
					the first <code>&#x3C;p></code> element in the document:</p>
				<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;"
					tabindex="0"
					data-language="js"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> $p</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> $</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'p:first'</span><span style="color:#E1E4E8">);</span></span></code></pre>
				<p>Have a look at
					<a href="https://github.com/cheeriojs/cheerio-select/blob/master/README.md" target="_blank"
						rel="noopener noreferrer">cheerio-select</a>,
					the library that implements these extensions, to see what is available.</p>
				<p>For further information, please also have a look at jQuery’s guide on
					<a href="https://learn.jquery.com/using-jquery-core/selecting-elements/" target="_blank"
						rel="noopener noreferrer">selecting elements</a>,
					as well as
					<a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector" target="_blank"
						rel="noopener noreferrer">MDN</a>.</p>
				<p>Finally, to add custom CSS pseudo-classes, have a look at the
					<a href="/docs/advanced/extending-cheerio#adding-custom-css-pseudo-classes">Extending Cheerio
						guide</a>.</p>
			</article>
			<div class="mt-10 pt-5"> <a
					href="https://github.com/cheeriojs/cheerio/edit/main/website/src/content/docs/basics/selecting.md"
					target="_blank" rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-primary dark:text-slate-500 dark:hover:text-primary">
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125">
						</path>
					</svg>
					Edit this page on GitHub
				</a> </div>
			<nav class="mt-12 flex items-stretch gap-4 border-t border-slate-200 pt-6 dark:border-slate-700/50"
				aria-label="Page navigation"> <a href="/docs/basics/loading"
					class="group flex flex-1 flex-col items-start rounded-xl border border-slate-200 px-5 py-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:hover:border-primary/40">
					<span class="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Previous</span>
					<span class="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-primary dark:text-slate-200 dark:group-hover:text-primary"> <svg class="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path> </svg> Loading Documents </span>
				</a> <a href="/docs/basics/traversing"
					class="group flex flex-1 flex-col items-end rounded-xl border border-slate-200 px-5 py-4 transition-all hover:border-primary/40 hover:shadow-sm dark:border-slate-700 dark:hover:border-primary/40">
					<span class="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Next</span>
					<span class="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-primary dark:text-slate-200 dark:group-hover:text-primary"> Traversing the DOM <svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </span>
				</a> </nav>
		</main>
	</div>
	<footer class="border-t border-slate-200 bg-slate-950 py-16 text-slate-400 dark:border-slate-800">
		<div class="mx-auto max-w-7xl px-6">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				<!-- Brand column -->
				<div class="col-span-2 mb-4 md:col-span-1 md:mb-0"> <a href="/" class="mb-4 flex items-center gap-2.5">
						<img src="/_astro/orange-c.LpIsIfBH_Z1HYzg2.svg" alt="Cheerio" loading="lazy" decoding="async" width="400" height="400" class="h-7 w-7">
						<span class="text-lg font-semibold text-white">Cheerio</span> </a>
					<p class="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
						The fast, flexible & elegant library for parsing and manipulating HTML and XML.
					</p>
				</div>
				<div>
					<h3 class="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500"> Docs </h3>
					<ul class="space-y-3">
						<li> <a href="/docs/intro" class="text-sm transition-colors hover:text-primary-light"> Learn
							</a> </li>
						<li> <a href="/docs/api" class="text-sm transition-colors hover:text-primary-light"> API </a>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500"> Community </h3>
					<ul class="space-y-3">
						<li> <a href="https://stackoverflow.com/questions/tagged/cheerio"
								class="text-sm transition-colors hover:text-primary-light" target="_blank"
								rel="noopener noreferrer"> Stack Overflow </a> </li>
						<li> <a href="https://github.com/cheeriojs/cheerio"
								class="text-sm transition-colors hover:text-primary-light" target="_blank"
								rel="noopener noreferrer"> GitHub </a> </li>
					</ul>
				</div>
				<div>
					<h3 class="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500"> More </h3>
					<ul class="space-y-3">
						<li> <a href="/blog" class="text-sm transition-colors hover:text-primary-light"> Blog </a> </li>
					</ul>
				</div>
			</div>
			<div
				class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/60 pt-8 md:flex-row">
				<div class="text-xs text-slate-600">
					Copyright &copy; 2026 The Cheerio contributors
				</div>
				<div class="flex items-center gap-4"> <a href="https://github.com/cheeriojs/cheerio" target="_blank"
						rel="noopener noreferrer" class="text-slate-600 transition-colors hover:text-slate-400"
						aria-label="GitHub"> <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
							</path>
						</svg> </a> </div>
			</div>
		</div>
	</footer>
</body>

</html>`;
