import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./auth/authContext";
import { UserProvider } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        {" "}
        <App />
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);
