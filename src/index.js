import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Pages/Home";
import { default as SucKhoe } from "./Components/Pages/SucKhoe";
import TheGioi from "./Components/Pages/TheGioi";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        exact: true,
        path: "/suc-khoe",
        element: <SucKhoe />,
      },

      {
        path: "*",
        element: <div>Not Found</div>,
      },

      {
        path: "the-gioi",
        element: <TheGioi />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
