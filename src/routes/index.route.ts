import { createRouter } from '@/lib/create-app'
import { createRoute } from '@hono/zod-openapi'
import { z } from 'zod'

const router = createRouter()
  .openapi(createRoute({
    method: 'get',
    path: '/',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: 'Hono API Index',
      },
    },
  }), (c) => {
    return c.json({
      message: 'Hono API Index',
    })
  })

export default router
