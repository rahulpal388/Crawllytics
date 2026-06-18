

export type LogLevelType =
    | "INFO"
    | "WARN"
    | "ERROR"
    | "DEBUG"
    | "FATAL";


type LogMessageType = {
    message: string;
    path: string;
    metaData?: Record<string, unknown>
}

type FormateMessageType = LogMessageType & { level: LogLevelType }

export const logger = loggerFn();

function loggerFn() {
    return {
        info,
        warn,
        error,
        debug,
        fatal
    }

    function formateMessage(msg: FormateMessageType) {
        return JSON.stringify({
            timeStamp: new Date().toISOString(),
            level: msg.level,
            message: msg.message,
            metaData: msg.metaData
        })
    }


    function info(msg: LogMessageType) {
        console.log(formateMessage({
            level: "INFO",
            message: msg.message,
            metaData: msg.metaData,
            path: msg.path
        }))
    }
    function warn(msg: LogMessageType) {
        console.warn(formateMessage({
            level: "WARN",
            message: msg.message,
            metaData: msg.metaData,
            path: msg.path
        }))
    }
    function error(msg: LogMessageType) {
        console.error(formateMessage({
            level: "ERROR",
            message: msg.message,
            metaData: msg.metaData,
            path: msg.path

        }))
    }
    function debug(msg: LogMessageType) {
        console.debug(formateMessage({
            level: "DEBUG",
            message: msg.message,
            metaData: msg.metaData,
            path: msg.path

        }))
    }
    function fatal(msg: LogMessageType) {
        console.error(formateMessage({
            level: "FATAL",
            message: msg.message,
            metaData: msg.metaData,
            path: msg.path

        }))
    }
}