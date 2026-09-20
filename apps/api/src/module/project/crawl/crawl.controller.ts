import { Request, Response, NextFunction } from "express";

import { crawlProjectRequestSchema } from "@repo/contracts/apiContracts/project/crawl.request";
import crawlService from "./crawl.service.js";
import { ApiError } from "@/shared/error/apiError.js";

export async function CrawlProjectController(req: Request, res: Response, next: NextFunction) {
  const { success, data, error } = crawlProjectRequestSchema.safeParse(req.query);

  if (!success) {
    throw ApiError.validation(error);
  }
  const response = await crawlService.start(data);

  res.status(200).json(response);
}
