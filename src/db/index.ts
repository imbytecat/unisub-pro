import env from '@/env'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'
import 'dotenv/config'

const db = drizzle(env.DB_FILE_NAME, {
  schema,
})

export default db
