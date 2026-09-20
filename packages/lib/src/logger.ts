export type LogLevelType = "INFO" | "WARN" | "ERROR" | "DEBUG" | "FATAL";

export type LogMessageType = {
  message: string;
  path: string;
  requestId: string;
  metaData?: Record<string, unknown>;
};

export type RequestStartedLogType = {
  requestId: string;
  method: string;
  path: string;
  ip: string;
  userAgent: string;
  contentLength?: number;
};

export type RequestCompletedLogType = {
  requestId: string;
  method: string;
  path: string;
  statusCode: number;
  durationMs: number;
};

export const logger = loggerFn();

function loggerFn() {
  return {
    info,
    warn,
    error,
    debug,
    fatal,
    logRequest,
    logRequestCompleted,
  };

  function formatMessage(level: LogLevelType, msg: LogMessageType) {
    return JSON.stringify({
      requestId: msg.requestId,
      level,
      message: msg.message,
      path: msg.path,
      metaData: msg.metaData,
      timestamp: new Date().toISOString(),
    });
  }

  function info(msg: LogMessageType) {
    console.log("[INFO]", formatMessage("INFO", msg));
  }

  function warn(msg: LogMessageType) {
    console.warn("[WARN]", formatMessage("WARN", msg));
  }

  function error(msg: LogMessageType) {
    console.error("[ERROR]", formatMessage("ERROR", msg));
  }

  function debug(msg: LogMessageType) {
    console.debug("[DEBUG]", formatMessage("DEBUG", msg));
  }

  function fatal(msg: LogMessageType) {
    console.error("[FATAL]", formatMessage("FATAL", msg));
  }

  function logRequest(msg: RequestStartedLogType) {
    const { requestId, ...rest } = msg;
    console.log(
      "[REQUEST]",
      JSON.stringify({
        requestId,
        level: "INFO",
        event: "REQUEST_STARTED",
        rest,
        timestamp: new Date().toISOString(),
      }),
    );
  }

  function logRequestCompleted(msg: RequestCompletedLogType) {
    const { requestId, ...rest } = msg;
    console.log(
      "[REQUEST]",
      JSON.stringify({
        requestId,
        level: "INFO",
        event: "REQUEST_COMPLETED",
        rest,
        timestamp: new Date().toISOString(),
      }),
    );
  }
}
