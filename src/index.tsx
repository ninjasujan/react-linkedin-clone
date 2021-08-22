import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF",
      light: "#525252",
    },
  },
  typography: {
    h6: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem",
    },
    subtitle2: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
