import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ConstantProvider from "./constants/ConstantProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConstantProvider>
        <App />
      </ConstantProvider>
    </BrowserRouter>
  </React.StrictMode>
);
