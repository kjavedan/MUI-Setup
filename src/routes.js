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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        element: <Navigate to="/login" />,
        index: true,
      },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
