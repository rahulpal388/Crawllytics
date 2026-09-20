import { env } from "@/app/app.js";
import { connectDB } from "@repo/db/index";

export async function initializeDatabse() {
  const dbClient = await connectDB(env.DATABASE_URL);

  if (!dbClient.success) {
    console.log("Failed to connect to database");
    process.exit(1);
  }
  return dbClient;
}
