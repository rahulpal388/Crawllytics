import z from "zod";
import mongoose from "mongoose";

export const ObjectIdSchema = z.preprocess(
  (val) => {
    if (typeof val === "string" && mongoose.isValidObjectId(val)) {
      return new mongoose.Types.ObjectId(val);
    }
    return val;
  },
  z.instanceof(mongoose.Types.ObjectId, {
    message: "Invalide objectId",
  }),
);
