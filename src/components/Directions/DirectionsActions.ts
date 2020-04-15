import axios from "axios";

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

export function fetchDirections() {
  const response = axios.get("http/localhost:8000/directions");
  return {
    type: typeof FETCH_DIRECTIONS_SUCCESS,
    payload: response,
  };
}

export function fetchDirectionsError() {
  return {
    type: typeof FETCH_DIRECTIONS_ERROR,
    error: "an Error occurred fetching",
  };
}
