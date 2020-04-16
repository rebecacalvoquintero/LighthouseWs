import { Dispatch } from "react";
import axios from "axios";
import fetch from "cross-fetch";

export const REQUEST_DIRECTIONS = "REQUEST_DIRECTIONS";
export const FETCH_DIRECTIONS = "FETCH_DIRECTIONS";
export const FETCH_DIRECTIONS_SUCCESS = "FETCH_DIRECTIONS_SUCCESS";
export const FETCH_DIRECTIONS_ERROR = "FETCH_DIRECTIONS_ERROR";
export const RECEIVE_DIRECTIONS = "RECEIVE_DIRECTIONS";

interface fetchDirections {
  type: typeof FETCH_DIRECTIONS;
}

interface fetchDirectionsError {
  type: typeof FETCH_DIRECTIONS_ERROR;
  error: string;
}

export function fetchDirectionsError() {
  return {
    type: typeof FETCH_DIRECTIONS_ERROR,
    error: "an Error occurred fetching",
  };
}

function requestDirections() {
  return {
    type: REQUEST_DIRECTIONS,
  };
}

function receiveDirections(json: JSON) {
  return {
    type: RECEIVE_DIRECTIONS,
    directions: json,
  };
}

export function fetchDirections() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch: any) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestDirections());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch("http/localhost:8000/directions")
      .then(
        (response) => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        // DISPATCH THE ERROR TYPE
        (error) => console.log("An error occurred.", error)
      )
      .then((json) =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveDirections(json))
      );
  };
}

export default {
  fetchDirections,
  fetchDirectionsError,
};
