import { FetchErrorType } from "@repo/contracts/types/urlInformationType/eachUrlNetworkTypes";


export function getFetchError(
    error: NodeJS.ErrnoException,
    timedOut: boolean
): FetchErrorType {
    if (timedOut) {
        return {
            code: "TIMEOUT",
            message: error.message,
        };
    }

    switch (error.code) {
        // DNS resolution errors
        case "ENOTFOUND":
        case "EAI_AGAIN":
        case "EAI_FAIL":
        case "EAI_NONAME":
            return {
                code: "DNS_FAILURE",
                message: error.message,
            };

        // TCP connection refused
        case "ECONNREFUSED":
            return {
                code: "CONNECTION_REFUSED",
                message: error.message,
            };

        default: {
            // TLS / certificate errors
            const tlsErrorCodes = new Set([
                "CERT_HAS_EXPIRED",
                "CERT_NOT_YET_VALID",
                "CERT_UNTRUSTED",
                "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
                "DEPTH_ZERO_SELF_SIGNED_CERT",
                "SELF_SIGNED_CERT_IN_CHAIN",
                "ERR_TLS_CERT_ALTNAME_INVALID",
                "ERR_TLS_HANDSHAKE_TIMEOUT",
                "ERR_TLS_CERT_SIGNATURE_ALGORITHM_UNSUPPORTED",
            ]);

            if (tlsErrorCodes.has(error.code ?? "")) {
                return {
                    code: "TLS_ERROR",
                    message: error.message,
                };
            }

            return {
                code: "UNKNOWN",
                message: error.message,
            };
        }
    }
}