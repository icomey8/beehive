import { expect, test } from 'vitest'
import server from '@tanstack/react-start/server-entry'

test('the home page shows the app name and the server Node version', async () => {
  const response = await server.fetch(new Request('http://localhost/'))
  const html = await response.text()
  expect(response.status).toBe(200)
  expect(html).toContain('<h1>board-sandbox</h1>')
  expect(html).toContain(process.version)
})
