import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./variables.css";
import "react-phone-number-input/style.css";
import Router from "./routes/.";
import Loader from "./Components/Loader"

// @ts-ignore
window.pxToRem = (px: number, baseSize = 16) => `${px / baseSize}rem`;

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={Router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
