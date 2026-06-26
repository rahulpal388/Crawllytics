import { z } from "zod"

export const crawlSeedUrlBodySchema = z.object({
    url: z.string(),
    depth: z.number().int().positive().max(3).optional(),
    includeSiteMapXML: z.boolean().default(false),
    siteMapUrl: z.string().optional()
})


export type CrawlSeedUrlBody = z.infer<typeof crawlSeedUrlBodySchema>