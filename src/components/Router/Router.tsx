import { Route, Switch } from "react-router-dom";

import Directions from "../Directions/Directions";
import Home from "../Home/Home";
import React from "react";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/directions" component={Directions} />
  </Switch>
);

export default Router;
