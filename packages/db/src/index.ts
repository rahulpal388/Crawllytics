import mongoose from "mongoose";

export async function connectDB(dbUrl: string): Promise<
  | {
      success: true;
      connection: typeof mongoose;
    }
  | {
      success: false;
    }
> {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
    return { success: true, connection };
  } catch (error) {
    return { success: false };
  }
}
