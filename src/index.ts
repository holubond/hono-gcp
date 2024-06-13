import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { hello } from './a.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text(`${hello} from hono 🚀`)
})

const port = parseInt(process.env.PORT ?? "3000")
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
