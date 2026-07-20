import { HTMLAudioType } from "./htmlAudioType.js";
import { HTMLImageType } from "./htmlImagesType.js";
import { HTMLVideoType } from "./htmlVideoType.js";

export type HTMLMediaTypes = {
  images: HTMLImageType[];
  videos: HTMLVideoType[];
  audios: HTMLAudioType[];
};
