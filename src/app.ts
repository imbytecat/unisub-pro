import { logger } from '@/middlewares/logger'
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

const app = new OpenAPIHono()

app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.notFound(notFound)
app.onError(onError)

export default app
