import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Asol from "./components/Asol";
import Mobiles from "./components/Mobiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Asol></Asol>,
    children: [
      {
        path: "/phones",
        element: <Mobiles></Mobiles>,
        loader: () => {
          fetch("http://localhost:3000/phones");
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
