//REACT
import React from "react";
//REACT-ROUTER
import { Navigate, createBrowserRouter } from "react-router-dom";
//LAYOUT
import MainLayout from "./layouts/MainLayout";

//PAGES
import Login from "./pages/Authentication/Login";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Register from "./pages/Authentication/Register";

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
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
