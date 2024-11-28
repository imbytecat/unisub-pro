import * as process from 'node:process'
import app from '@/app'

const port: number = Number(process.env.PORT) || 3000

console.log(`Server is running on http://localhost:${port}`)
Bun.serve({
  fetch: app.fetch,
  port,
})
