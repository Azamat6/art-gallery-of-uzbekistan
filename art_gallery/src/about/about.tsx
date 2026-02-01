import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "../i18n";

import { ReactLenis } from "../components/SmoothScrolling";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </StrictMode>
);
