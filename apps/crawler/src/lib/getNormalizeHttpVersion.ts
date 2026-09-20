export function normalizeHttpVersion(version: string) {
  switch (version) {
    case "1.0":
      return "HTTP/1.0";

    case "1.1":
      return "HTTP/1.1";

    default:
      return null;
  }
}
