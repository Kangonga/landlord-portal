import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/home/Home';
import BuildingHomePage from './features/buildingFeatures/pages/BuildingHomePage';
import PageNotFound from './shared/pageNotFound/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './pages/login/Login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainMeter from './pages/mainMeter/MainMeter';
import HelpCenter from './pages/helpCenter/HelpCenter';
import Profile from './pages/profile/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route index element={<Login />} />
      <Route path='home' element={<App />}>
        <Route index element={<Home />} />
        <Route path='buildings' element={<BuildingHomePage />} />
        <Route path='mainMeters' element={<MainMeter />} />
        <Route path='help' element={<HelpCenter />} />
        <Route path='profile' element={<Profile />} />
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
