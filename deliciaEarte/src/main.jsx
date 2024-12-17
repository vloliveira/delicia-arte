import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/landing page/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
