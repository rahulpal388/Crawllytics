import http from "node:http"
import https from "node:https"



let httpAgent = new http.Agent({
    keepAlive: true,
});

let httpsAgent = new https.Agent({
    keepAlive: true,
});


export function getHttpClient(protocol: string) {
    console.log("getHttpClient protocol:", protocol);

    if (protocol === "https:") {
        console.log("Returning HTTPS");
        return https;
    }

    console.log("Returning HTTP");
    return http;
}
export function getHttpAgent(protocol: string) {
    console.log("protocol ", protocol, " ", protocol === "https:")
    if (protocol === "https:") {
        return httpsAgent;
    }
    return httpAgent;
}