import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AppRoutes } from "./routes/routes";
import MtaProvider from "./contexts/GameContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MtaProvider>
      <AppRoutes />
    </MtaProvider>
  </React.StrictMode>
);
