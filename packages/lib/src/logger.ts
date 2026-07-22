export type LogLevelType = "INFO" | "WARN" | "ERROR" | "DEBUG" | "FATAL";

type LogMessageType = {
  message: string;
  path: string;
  metaData?: Record<string, unknown>;
};

type RequestMessageType = {
  timestamp: string;
  level: LogLevelType;
  requestId: string;
  event: string;
  method: string;
  path: string;
  ip: string;
  userAgent: string;
  contentLength: number
}

type FormateMessageType = LogMessageType & { level: LogLevelType };

export const logger = loggerFn();

function loggerFn() {
  return {
    info,
    warn,
    error,
    debug,
    fatal,
    logRequest
  };

  function formateMessage(msg: FormateMessageType) {
    return JSON.stringify({
      timeStamp: new Date().toISOString(),
      level: msg.level,
      message: msg.message,
      metaData: msg.metaData,
    });
  }

  function logRequest(msg: RequestMessageType) {
    console.log(
      "[REQUEST:]",
      JSON.stringify({
        timestamp: msg.timestamp,
        level: msg.level,
        requestId: msg.requestId,
        event: msg.event,
        method: msg.method,
        path: msg.path,
        ip: msg.ip,
        userAgent: msg.userAgent,
        contentLength: msg.contentLength
      })
    );
  }

  function info(msg: LogMessageType) {
    console.log(
      "[INFO:]",
      formateMessage({
        level: "INFO",
        message: msg.message,
        metaData: msg.metaData,
        path: msg.path,
      }),
    );
  }

  function warn(msg: LogMessageType) {
    console.warn(
      "[WARN:]",
      formateMessage({
        level: "WARN",
        message: msg.message,
        metaData: msg.metaData,
        path: msg.path,
      }),
    );
  }
  function error(msg: LogMessageType) {
    console.error(
      "[ERROR:]",
      formateMessage({
        level: "ERROR",
        message: msg.message,
        metaData: msg.metaData,
        path: msg.path,
      }),
    );
  }
  function debug(msg: LogMessageType) {
    console.debug(
      "[DEBUG:]",
      formateMessage({
        level: "DEBUG",
        message: msg.message,
        metaData: msg.metaData,
        path: msg.path,
      }),
    );
  }
  function fatal(msg: LogMessageType) {
    console.error(
      "[FATAL:]",
      formateMessage({
        level: "FATAL",
        message: msg.message,
        metaData: msg.metaData,
        path: msg.path,
      }),
    );
  }
}
