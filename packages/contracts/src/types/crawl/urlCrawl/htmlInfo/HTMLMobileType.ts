export type MobileHtmlDataType = {
  hasMetaViewport: boolean;
  viewportContent: string | null;
  hasManifest: boolean;
  manifestUrl: string | null;
  hasAppleTouchIcon: boolean;
  appleTouchIcons: string[];
  hasThemeColor: boolean;
  themeColor: string | null;
  appleMobileWebAppCapable: boolean;
  mobileWebAppCapable: boolean;
  appleStatusBarStyle: string | null;
  formatDetection: string | null;
  hasAmp: boolean;
  ampUrl: string | null;
  mobileAlternateUrl: string | null;
};
