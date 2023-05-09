import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom';


const routes:RouteObject[] = [
  {
    path:'/',
    element: <App />,
    errorElement:<h1>Error: Page not found</h1>,
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
