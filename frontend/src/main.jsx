import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoute from "./Routers/Routes.jsx";
import {AuthProvider} from "./Context/AuthContext.jsx";
import { Toaster } from 'sonner'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster  position="top-right" richColors />
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
