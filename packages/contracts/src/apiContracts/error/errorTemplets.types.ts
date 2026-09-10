import { ZodError } from "zod";


export interface ApiErrorDataMap {
    UNAUTHORIZED: undefined;
    FORBIDDEN: undefined;
    USER_NOT_FOUND: undefined;
    USER_ALREADY_EXISTS: undefined;
    EXPIRED_LINK: undefined;
    VALIDATION_ERROR: { fields: Record<string, string> }; // field -> message
    PROJECT_NOT_FOUND: undefined;
    PROJECT_ALREADY_EXISTS: string;
    INVALID_CREDENTIALS: undefined;
    CRAWL_NOT_FOUND: undefined;
    CRAWL_ALREADY_RUNNING: { crawlId: string };
    CRAWL_LIMIT_REACHED: { limit: number; resetAt: string };
    CRAWL_NOT_READY: { retryAfter: string };
    RATE_LIMITED: { retryAfter: string };
    INTERNAL_SERVER_ERROR: undefined;
}
export type ApiErrorCode = keyof ApiErrorDataMap;


export type ErrorVariant<K extends ApiErrorCode> = ApiErrorDataMap[K] extends undefined
    ? { success: false; errorCode: K; message: string; statusCode: number }
    : { success: false; errorCode: K; message: string; statusCode: number; data: ApiErrorDataMap[K] };
