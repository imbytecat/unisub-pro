import type { AppBindings } from '@/lib/types'
import { logger } from '@/middlewares/logger'
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'

export const createRouter = () =>
  new OpenAPIHono<AppBindings>({
    strict: false, // disable strict mode, e.g. `/users` instead of `/users/`
  })

const createApp = () => {
  const app = createRouter()

  app.use(logger())
  app.use(serveEmojiFavicon('🔥'))

  app.notFound(notFound)
  app.onError(onError)

  return app
}

export default createApp
