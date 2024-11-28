import * as process from 'node:process'
import { pinoLogger } from 'hono-pino'
import pino from 'pino'
import * as pretty from 'pino-pretty'

export const logger = () => {
  return pinoLogger({
    pino: pino(
      process.env.NODE_ENV === 'production'
        ? undefined
        : pretty.PinoPretty(),
    ),
  })
}
