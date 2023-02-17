import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

//Layouts
const AuthLayout = lazy(() => import("../Layout/AuthLayout/AuthLayout"));

//Auth
const SignIn = lazy(() => import("../Pages/Auth/SignIn"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;