import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import BuildingHomePage from "./features/buildingFeatures/pages/BuildingHomePage";
import PageNotFound from "./shared/pageNotFound/PageNotFound";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Login from "./pages/login/Login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainMeter from "./pages/mainMeter/MainMeter";
import HelpCenter from "./pages/helpCenter/HelpCenter";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import "@/index.css";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SendOtp from "./pages/sendOtp/SendOtp";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />
      <Route path="otp" element={<SendOtp />} />
      <Route path="home" element={<App />}>
        <Route index element={<Home />} />
        <Route path="buildings" element={<BuildingHomePage />} />
        <Route path="mainMeters" element={<MainMeter />} />
        <Route path="help" element={<HelpCenter />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
