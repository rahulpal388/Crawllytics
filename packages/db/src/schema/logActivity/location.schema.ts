import { LocationType } from "../../types/logActivitySchema.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import { Schema } from "mongoose";

const LocationSchemaDefination: SchemaOf<LocationType> = {
  country: { type: String, default: null },
  region: { type: String, default: null },
  city: { type: String, default: null },
};

const LocationSchema = new Schema<LocationType>(LocationSchemaDefination, {
  _id: false,
  versionKey: false,
  strict: false,
});

export default LocationSchema;
