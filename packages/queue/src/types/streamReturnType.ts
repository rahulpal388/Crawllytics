import { StreamKeys, StreamMessageMap } from "./streamTypes.js";

export type StreamReturnType<T extends StreamKeys> = {
  id: string;
  message: StreamMessageMap[T];
};
