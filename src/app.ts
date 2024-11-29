import configureOpenAPI from '@/lib/configure-openapi'
import createApp from '@/lib/create-app'
import index from '@/routes/index.route'
import proxies from '@/routes/proxies/proxies.index'

const app = createApp()

const routes = [
  index,
  proxies,
]

configureOpenAPI(app)

routes.forEach((route) => {
  app.route('/', route)
})

export default app
