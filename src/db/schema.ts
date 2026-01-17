import { pgTable, serial, text, timestamp, boolean, doublePrecision, varchar } from "drizzle-orm/pg-core";

export const reports = pgTable("reports", {
    id: serial("id").primaryKey(),
    reportId: varchar("report_id").notNull().unique(), // Public facing ID
    userId: varchar("user_id").notNull(), // Clerk User ID

    title: text("title"),
    description: text("description"),

    location: text("location"),
    latitude: doublePrecision("latitude"),
    longitude: doublePrecision("longitude"),

    imageUrl: text("image_url").notNull(),

    status: varchar("status", { length: 20 }).$type<"pending" | "resolved" | "unresolved">().default("pending").notNull(),
    type: varchar("type"), // Category e.g. "Pothole", "Trash"

    isSpam: boolean("is_spam").default(false).notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
