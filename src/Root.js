import "./index.css";

import { applyMiddleware, combineReducers } from "redux";

import DirectionsReducer from "./components/Directions/DirectionsReducer";
import HomeReducer from "./components/Home/HomeReducer";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import reduxPromise from "redux-promise";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    combineReducers({ directions: DirectionsReducer, HomeReducer }),
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children} </Provider>;
};
