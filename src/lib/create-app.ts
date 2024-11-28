import type { AppBindings } from '@/lib/types'
import { logger } from '@/middlewares/logger'
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'

const createApp = () => {
  const app = new OpenAPIHono<AppBindings>({
    strict: false, // disable strict mode, e.g. `/users` instead of `/users/`
  })

  app.use(logger())
  app.use(serveEmojiFavicon('🔥'))

  app.notFound(notFound)
  app.onError(onError)

  return app
}

export default createApp
