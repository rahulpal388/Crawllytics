import { StreamKeys, StreamMessageMap } from "@/types/streamTypes.js";




export type StreamReturnType<T extends StreamKeys> = {
    id: string;
    message: StreamMessageMap[T];
}