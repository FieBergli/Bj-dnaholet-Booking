import { date, pgTable, text, serial, uuid } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: uuid().notNull().primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  from: date().notNull(),
  to: date().notNull(),
});
