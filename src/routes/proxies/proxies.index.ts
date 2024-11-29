import { createRouter } from '@/lib/create-app'
import * as handlers from './proxies.handlers'
import * as routes from './proxies.routes'

const router = createRouter()
  .openapi(routes.list, handlers.list)

export default router
