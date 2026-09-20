import {
  ApiErrorCode,
  ApiErrorDataMap,
} from "@repo/contracts/apiContracts/error/errorTemplets.types";

export class AppError<K extends ApiErrorCode = ApiErrorCode> extends Error {
  constructor(
    public readonly code: K,
    public readonly statusCode: number,
    message: string,
    public readonly data?: ApiErrorDataMap[K],
  ) {
    super(message);
    this.name = "AppError";

    // Error.captureStackTrace(this, AppError);
  }
}
