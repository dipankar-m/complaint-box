import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./i18n.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFF00",
    },
    secondary: {
      main: "#000",
      contrastText: "#FFF",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
    fontFamily: "Nunito",
    h1: {
      color: "#FFF",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
