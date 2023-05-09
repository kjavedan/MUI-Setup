//REACT
import React from "react";
//REACT-ROUTER
import { Navigate, createBrowserRouter } from "react-router-dom";
//LAYOUT
import MainLayout from "./layouts/MainLayout";

//PAGES
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import SimpleLayout from "./layouts/SimpleLayout";
import Activity from "./pages/Activity";
import Recharge from "./pages/Recharge/Recharge";
import Withdraw from "./pages/Withdraw/Withdraw";
import Account from "./pages/Account";
import PaymentGateway from "./pages/Recharge/PaymentGateway";
import RequestRecharge from "./pages/Recharge/RequestRecharge";
import RechargeHistory from "./pages/Recharge/RechargeHistory";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        element: <Navigate to="/app/home" />,
        index: true,
      },
      { path: "home", element: <Home /> },
      { path: "activity", element: <Activity /> },
      { path: "recharge", element: <Recharge /> },
      { path: "recharge/payment-gateway", element: <PaymentGateway /> },
      { path: "recharge/request-recharge", element: <RequestRecharge /> },
      { path: "recharge/history", element: <RechargeHistory /> },
      { path: "withdraw", element: <Withdraw /> },
      { path: "account", element: <Account /> },
    ],
  },
  {
    path: "/",
    element: <SimpleLayout />,
    errorElement: <Page404 />,
    children: [
      {
        element: <Navigate to="/login" />,
        index: true,
      },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
