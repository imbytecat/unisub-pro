import type { PinoLogger } from 'hono-pino'
import { logger } from '@/middlewares/logger'
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

type AppBindings = {
  Variables: {
    logger: PinoLogger
  }
}

const app = new OpenAPIHono<AppBindings>()
app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.notFound(notFound)
app.onError(onError)

export default app
