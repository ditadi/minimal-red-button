
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

// Simple table to track page views (optional, for future analytics)
export const pageViewsTable = pgTable('page_views', {
  id: serial('id').primaryKey(),
  page_name: text('page_name').notNull(),
  viewed_at: timestamp('viewed_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type PageView = typeof pageViewsTable.$inferSelect;
export type NewPageView = typeof pageViewsTable.$inferInsert;

// Export all tables for proper query building
export const tables = { pageViews: pageViewsTable };
