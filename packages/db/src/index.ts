import mongoose from "mongoose";

export async function connectDB(dbUrl: string) {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    return false;
  }
}
