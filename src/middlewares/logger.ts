import env from '@/env'
import { pinoLogger } from 'hono-pino'
import pino from 'pino'
import * as pretty from 'pino-pretty'

export const logger = () => {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL || 'info',
      },
      env.NODE_ENV === 'production'
        ? undefined
        : pretty.PinoPretty(),
    ),
  })
}
