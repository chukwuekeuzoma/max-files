import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/.";
import Loader from "./Components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={Router} />
    </Suspense>
  );
}

export default App;
