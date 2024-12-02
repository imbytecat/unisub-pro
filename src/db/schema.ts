import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

/**
 * 用户
 */
export const user = sqliteTable('user', {
  id: integer('id', { mode: 'number' })
    .primaryKey({ autoIncrement: true }),
  username: text('username')
    .notNull()
    .unique(),
  password: text('password')
    .notNull(),
  role: text('role', { enum: ['admin', 'user'] })
    .notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date()),
  updateAt: integer('updated_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
})

/**
 * 单条代理节点信息
 * 用于组成节点组
 */
export const proxy = sqliteTable('proxy', {
  id: integer('id', { mode: 'number' })
    .primaryKey({ autoIncrement: true }),
  // name: text('name').notNull(),
  profile: text('profile', { mode: 'json' })
    .notNull(), // 若定义类型，则会导致难以存储额外字段
  userId: integer('user_id')
    .notNull(),
})

/**
 * 代理节点组
 * 用于生成节点列表，在下面订阅配置中类似第三方订阅的存在
 */
export const proxyGroup = sqliteTable('proxy_group', {
  id: integer('id', { mode: 'number' })
    .primaryKey({ autoIncrement: true }),
  name: text('name')
    .notNull(),
  proxies: text('proxies', { mode: 'json' })
    .notNull()
    .$type<
    Array<{
      proxyId: number
      isEnabled: boolean
    }>
  >(),
  isEnabled: integer('is_enabled', { mode: 'boolean' }),
  token: text('token')
    .notNull(),
  userId: integer('user_id')
    .notNull(),
})

/**
 * 订阅配置
 */
type ProxyProviderMap = {
  internal: {
    type: 'internal'
    proxyGroupId: number
    isEnabled: boolean
  }
  url: {
    type: 'url'
    url: string
    description?: string
    isEnabled: boolean
  }
}

type ProxyProvider<T extends keyof ProxyProviderMap> = ProxyProviderMap[T]

export const subscription = sqliteTable('subscription', {
  id: integer('id', { mode: 'number' })
    .primaryKey({ autoIncrement: true }),
  proxyProviders: text('proxy_providers', { mode: 'json' })
    .notNull()
    .$type<ProxyProvider<keyof ProxyProviderMap>>(),
  isEnabled: integer('is_enabled', { mode: 'boolean' }),
  token: text('token')
    .notNull(),
})
