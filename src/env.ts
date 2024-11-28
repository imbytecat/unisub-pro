import type { ZodError } from 'zod'
import * as process from 'node:process'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z } from 'zod'

expand(config())

const logLevels = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'] as const // use pino.Level

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(logLevels).default('info'),
})

export type Env = z.infer<typeof envSchema>

// eslint-disable-next-line import/no-mutable-exports
let env: Env
try {
  env = envSchema.parse(process.env)
}
catch (e) {
  const error = e as ZodError
  console.error('❌ Invalid environment variables:', error.format())
  console.error(error.flatten())
  process.exit(1)
}

export default env
