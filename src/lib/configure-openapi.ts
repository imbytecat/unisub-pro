import type { AppOpenAPI } from '@/lib/types'
import { apiReference } from '@scalar/hono-api-reference'
import packageJSON from '../../package.json'

const configureOpenAPI = (app: AppOpenAPI) => {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: 'Hono API',
    },
  })

  app.get('/reference', apiReference({
    theme: 'fastify',
    layout: 'modern',
    spec: {
      url: '/doc',
    },
  }))
}

export default configureOpenAPI
