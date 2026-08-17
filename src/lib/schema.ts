import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const enquiries = pgTable('enquiries', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  mobileNumber: text('mobile_number').notNull(),
  courseInterested: text('course_interested').notNull(),
  preferredBatch: text('preferred_batch'),
  qualification: text('qualification'),
  message: text('message'),
  submittedAt: timestamp('submitted_at').defaultNow().notNull(),
  status: text('status').default('new').notNull(),
});
