import { z } from "zod"

export const crawlSeedUrlBodySchema = z.object({
    url: z.string(),
    depth: z.number().int().positive().max(3).optional()
})


export type CrawlSeedUrlBody = z.infer<typeof crawlSeedUrlBodySchema>