import { AppError } from "@/shared/error/appError.js";
import { ApiErrorCode, ErrorVariant } from "@repo/contracts/apiContracts/error/errorTemplets.types";
import { ZodError } from "zod";

export const ApiError = {
  unauthorized: (msg = "Authentication required") => new AppError("UNAUTHORIZED", 401, msg),
  forbidden: (msg: string) => new AppError("FORBIDDEN", 403, msg),

  userAlreadyExists: () => new AppError("USER_ALREADY_EXISTS", 409, "User already exists"),
  invalidCredentials: (msg: string) => new AppError("INVALID_CREDENTIALS", 401, msg),
  userNotFound: () => new AppError("USER_NOT_FOUND", 404, "User not found"),
  linkExpired: () => new AppError("EXPIRED_LINK", 410, "Link has expired"),
  projectNotFound: (id: string) =>
    new AppError("PROJECT_NOT_FOUND", 404, `Project Id ${id} does not found`),
  projectAlreadyExists: (domain: string) =>
    new AppError("PROJECT_ALREADY_EXISTS", 409, `Project with domain ${domain} already exists`),

  crawlAlreadyRunning: (crawlId: string) =>
    new AppError("CRAWL_ALREADY_RUNNING", 409, "A crawl is already in progress", { crawlId }),

  crawlLimitReached: (limit: number, resetAt: string) =>
    new AppError("CRAWL_LIMIT_REACHED", 429, "Crawl limit reached", {
      limit,
      resetAt,
    }),

  crawlNotReady: (retryAfter: string) =>
    new AppError("CRAWL_NOT_READY", 425, "Project cannot be crawled yet", { retryAfter }),

  validation: (error: ZodError) => {
    const fields: Record<string, string> = {};

    for (const issue of error.issues) {
      const field = issue.path.join(".");

      fields[field] = issue.message;
    }
    return new AppError("VALIDATION_ERROR", 400, "Validation failed", { fields });
  },
  internal: (msg = "Something went wrong") => new AppError("INTERNAL_SERVER_ERROR", 500, msg),
};
