import { z } from "zod";
import { ObjectIdSchema } from "../common/objectId.schema.js";

export const crawlProjectRequestSchema = z.object({
  projectId: ObjectIdSchema,
});

export type crawlProjectRequestType = z.infer<typeof crawlProjectRequestSchema>;
