import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

export const getServerInfo = createServerFn({ method: 'GET' }).handler(() => ({
  node: process.version,
}))

export const Route = createFileRoute('/')({
  loader: () => getServerInfo(),
  component: Home,
})

function Home() {
  const { node } = Route.useLoaderData()
  return (
    <main>
      <h1>board-sandbox</h1>
      <p>Node {node}</p>
    </main>
  )
}
