import React from "react";
import ReactDOM from "react-dom/client";

import { ProviderTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

import { App } from "./App";
import MtaProvider from "./context/GameContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTheme>
      <MtaProvider>
        <App />
        <GlobalStyle />
      </MtaProvider>
    </ProviderTheme>
  </React.StrictMode>
);
