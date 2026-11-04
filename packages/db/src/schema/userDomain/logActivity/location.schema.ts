import { Schema } from "mongoose";
import { SchemaOf } from "../../../types/schemaOfTypes.js";
import { LocationType } from "../../../types/userTypes/logActivitySchema.Types.js";

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
