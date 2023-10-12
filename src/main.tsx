import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { muiTheme } from "./styles/MuiModify/muiTheme.ts";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
