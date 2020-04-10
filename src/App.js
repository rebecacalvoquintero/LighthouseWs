import "./App.css";

import Home from "./components/Home/Home";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./styles/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
