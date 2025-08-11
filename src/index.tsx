import { QueryClient, QueryClientProvider } from 'react-query'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App/App'
import Home from './pages/Home'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <AppProvider />
      </Suspense>
    </QueryClientProvider>
  )
})
