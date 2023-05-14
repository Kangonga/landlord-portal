import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import '@/index.css'
import Home from './features/home/Home';
import BuildingHomePage from './features/buildingFeatures/pages/BuildingHomePage';
import PageNotFound from './shared/pageNotFound/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './pages/login/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route index element={<Login />} />
      <Route path='home' element={<App />}>
        <Route index element={<Home />} />
        <Route path='buildings' element={<BuildingHomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
