import app from '@/app'
import env from '@/env'

const port: number = env.PORT || 3000

console.log(`Server is running on http://localhost:${port}`)
Bun.serve({
  fetch: app.fetch,
  port,
})
