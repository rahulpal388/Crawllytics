export function getNormalizeProtocol(protocol: string): "http" | "https" {
  if (protocol === "http:") {
    return "http";
  }

  return "https";
}
