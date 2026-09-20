export const CDN_PROVIDERS: {
  provider: string;
  header: string;
}[] = [
  {
    provider: "Cloudflare",
    header: "cf-ray",
  },
  {
    provider: "Cloudflare",
    header: "cf-cache-status",
  },
  {
    provider: "Fastly",
    header: "x-served-by",
  },
  {
    provider: "Fastly",
    header: "fastly-debug-digest",
  },
  {
    provider: "Akamai",
    header: "akamai-cache-status",
  },
  {
    provider: "Akamai",
    header: "x-akamai-transformed",
  },
  {
    provider: "Akamai",
    header: "x-akamai-request-id",
  },
  {
    provider: "Amazon CloudFront",
    header: "x-amz-cf-id",
  },
  {
    provider: "Amazon CloudFront",
    header: "x-cache",
  },
  {
    provider: "Amazon CloudFront",
    header: "x-amz-cf-pop",
  },
  {
    provider: "Vercel",
    header: "x-vercel-cache",
  },
  {
    provider: "Vercel",
    header: "x-vercel-id",
  },
  {
    provider: "Netlify",
    header: "x-nf-request-id",
  },
  {
    provider: "BunnyCDN",
    header: "cdn-pullzone",
  },
  {
    provider: "BunnyCDN",
    header: "cdn-cache",
  },
  {
    provider: "KeyCDN",
    header: "x-edge-location",
  },
  {
    provider: "Sucuri",
    header: "x-sucuri-id",
  },
  {
    provider: "Sucuri",
    header: "x-sucuri-cache",
  },
  {
    provider: "Imperva",
    header: "x-iinfo",
  },
  {
    provider: "Imperva",
    header: "x-cdn",
  },
  {
    provider: "Azure CDN",
    header: "x-azure-ref",
  },
  {
    provider: "Google Cloud CDN",
    header: "via",
  },
  {
    provider: "Google Cloud CDN",
    header: "x-cache-hit",
  },
];
