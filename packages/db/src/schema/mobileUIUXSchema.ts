import { MobileHtmlDataType } from "@repo/config/types/urlInformationType/HTMLMobileType";
import { SchemaOf } from "../types/schemaOfTypes.js";
import { Schema } from "mongoose";

const mobileUIUXSchemaDefination: SchemaOf<MobileHtmlDataType> = {
  hasMetaViewport: { type: Boolean, default: false },
  viewportContent: { type: String, default: null },
  hasManifest: { type: Boolean, default: false },
  manifestUrl: { type: String, default: null },
  hasAppleTouchIcon: { type: Boolean, default: false },
  appleTouchIcons: { type: [String], default: [] },
  hasThemeColor: { type: Boolean, default: false },
  themeColor: { type: String, default: null },
  appleMobileWebAppCapable: { type: Boolean, default: false },
  mobileWebAppCapable: { type: Boolean, default: false },
  appleStatusBarStyle: { type: String, default: null },
  formatDetection: { type: String, default: null },
  hasAmp: { type: Boolean, default: false },
  ampUrl: { type: String, default: null },
  mobileAlternateUrl: { type: String, default: null },
};

export const mobileUIUXSchema = new Schema<MobileHtmlDataType>(mobileUIUXSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: true,
});
