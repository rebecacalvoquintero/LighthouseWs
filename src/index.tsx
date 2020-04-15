import "./index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Directions from "./components/Directions/Directions";
import Home from "./components/Home/Home";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root.js";
import theme from "./styles/theme";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/directions" component={Directions} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
