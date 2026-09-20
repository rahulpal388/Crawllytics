import http from "node:http";
import https from "node:https";

const httpAgent = new http.Agent({
  keepAlive: true,
});

const httpsAgent = new https.Agent({
  keepAlive: true,
});

export function getHttpClient(protocol: string) {
  if (protocol === "https:") {
    return https;
  }

  return http;
}
export function getHttpAgent(protocol: string) {
  if (protocol === "https:") {
    return httpsAgent;
  }
  return httpAgent;
}
