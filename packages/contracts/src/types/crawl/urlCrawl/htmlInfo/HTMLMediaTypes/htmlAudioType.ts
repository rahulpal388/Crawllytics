export type HTMLAudioType = {
  src: string;
  type: string | null;
  controls: boolean;
  autoplay: boolean;
  preload: "auto" | "metadata" | "none" | null;
};
