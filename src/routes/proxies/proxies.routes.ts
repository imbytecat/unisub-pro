import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCode from 'stoker/http-status-codes'
import { jsonContent } from 'stoker/openapi/helpers'
import { z } from 'zod'

export const list = createRoute({
  path: '/proxies',
  method: 'get',
  responses: {
    [HttpStatusCode.OK]: jsonContent(
      z.array(
        z.object({
          name: z.string(),
        }),
      ),
      'List of proxies',
    ),
  },
})

export type ListRoute = typeof list
