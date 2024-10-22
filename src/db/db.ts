import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const pool = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
});

pool`SELECT 1`
  .then(() => console.log("Connected to database successfully!"))
  .catch((err) => console.error("Failed to connect to database:", err));

export const db = drizzle(pool);
