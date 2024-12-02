import env from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  // out: './drizzle',
  out: './src/db/migrations',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: env.DB_FILE_NAME,
  },
})
