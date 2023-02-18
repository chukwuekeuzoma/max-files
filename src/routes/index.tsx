import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

//Layouts
const AuthLayout = lazy(() => import("../Layouts/AuthLayout/AuthLayout"));

//Auth
const SignIn = lazy(() => import("../Pages/Auth/SignIn"));
const SignUp = lazy(() => import("../Pages/Auth/SignUp"));

//Pages
const Home = lazy(() => import("../Pages/Home/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
