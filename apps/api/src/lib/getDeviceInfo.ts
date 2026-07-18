import { UAParser } from "ua-parser-js";
import { DeviceInfo } from "@/types/deviceInfo.js";

export function getDeviceInfo(userAgent: string | null): DeviceInfo {
  const parser = new UAParser(userAgent || undefined);

  const browser = parser.getBrowser();
  const device = parser.getDevice();
  const os = parser.getOS();

  return {
    browser: {
      name: browser.name || null,
      version: browser.version || null,
    },
    os: {
      name: os.name || null,
      version: os.version || null,
    },
    device: {
      type: device.type || null,
    },
  };
}
