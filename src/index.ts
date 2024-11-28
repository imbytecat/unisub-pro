import app from '@/app'

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

Bun.serve({
  fetch: app.fetch,
  port,
})
