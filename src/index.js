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
// Khai báo biến `router` với giá trị trả về của hàm `createBrowserRouter()`
// Hàm này sẽ tạo ra một đối tượng router cho ứng dụng React
const router = createBrowserRouter([
  // Định nghĩa các route cho ứng dụng
  {
    // Route chính của ứng dụng
    path: "/",
    element: <App />,

    children: [
      // Route cho trang chủ
      {
        path: "/",
        element: <Home />,
      },
      // Route cho trang sức khỏe
      {
        exact: true,
        path: "/suc-khoe",
        element: <SucKhoe />,
      },
      // Route mặc định khi không trùng khớp với bất kỳ route nào trên
      {
        path: "*",
        element: <div>Not Found</div>,
      },
      // Route cho trang thế giới
      {
        path: "the-gioi",
        element: <TheGioi />,
      },
    ],
  },
]);
// Render ứng dụng React vào thẻ root của trang HTML
// Sử dụng React.StrictMode để bật chế độ kiểm tra lỗi cấu trúc của ứng dụng
// Sử dụng RouterProvider để cung cấp đối tượng router cho ứng dụng
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
