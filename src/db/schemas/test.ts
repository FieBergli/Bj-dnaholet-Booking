import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const test = pgTable("test", {
  id: uuid().primaryKey(),
  createdAt: timestamp().notNull().defaultNow(),
  test1: text(),
  test2: text(),
});
