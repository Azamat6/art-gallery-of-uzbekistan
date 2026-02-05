import { StrictMode } from "react";
import  ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app";
import "../i18n";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>

          <HashRouter>
              <App />
            </HashRouter>

  </StrictMode>
);
