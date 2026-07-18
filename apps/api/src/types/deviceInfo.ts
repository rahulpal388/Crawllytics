export type LoginDeviceInfo = {
  userAgent: string | null;
  ip: string | null;
  time: Date;
};

export type DeviceInfo = {
  browser: {
    name: string | null;
    version: string | null;
  };
  os: {
    name: string | null;
    version: string | null;
  };
  device: {
    type: string | null;
  };
};
