import { Dispatch } from "react";
import axios from "axios";

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

export function fetchDirectionsError(error: Error) {
  return {
    type: typeof FETCH_DIRECTIONS_ERROR,
    error,
  };
}

function receiveDirections(directions: any) {
  return {
    type: RECEIVE_DIRECTIONS,
    directions,
  };
}

export function fetchDirections() {
  return function (dispatch: any) {
    return fetch("http/localhost:8000/directions").then(
      (directions: any) => dispatch(receiveDirections(directions)),
      (error: Error) => dispatch(fetchDirectionsError(error))
    );
  };
}

export default {
  fetchDirections,
  fetchDirectionsError,
};
