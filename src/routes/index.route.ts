import { createRouter } from '@/lib/create-app'
import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCode from 'stoker/http-status-codes'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'

const router = createRouter()
  .openapi(createRoute({
    tags: ['Index'],
    method: 'get',
    path: '/',
    responses: {
      [HttpStatusCode.OK]: jsonContent(
        createMessageObjectSchema('Test Index'),
        'Hono API Index',
      ),
    },
  }), (c) => {
    return c.json({
      message: 'Hono API Index',
    }, HttpStatusCode.OK)
  })

export default router
