import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import Router from "./components/Router/Router";
import theme from "./styles/theme";

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
