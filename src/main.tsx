import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    </Router>
  </React.StrictMode>
);
