import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { hello } from './a'

const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello Hono! ${hello}`)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
