import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// We fall back to a dummy string if missing so the build doesn't fail, 
// but it will fail at runtime if not provided.
const sql = neon(process.env.DATABASE_URL || "postgres://dummy:dummy@dummy.neon.tech/dummy");
export const db = drizzle(sql);
