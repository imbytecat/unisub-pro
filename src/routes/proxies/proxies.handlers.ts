import type { AppRouteHandler } from '@/lib/types'
import type { ListRoute } from '@/routes/proxies/proxies.routes'

export const list: AppRouteHandler<ListRoute>
    = (c) => {
      return c.json([
        {
          name: 'Proxy 1',
        },
      ])
    }
