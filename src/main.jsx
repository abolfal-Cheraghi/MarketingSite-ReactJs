import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
