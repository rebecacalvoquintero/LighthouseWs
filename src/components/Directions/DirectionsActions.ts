import axios from "axios";
export const FETCH_DIRECTIONS = "FETCH_DIRECTIONS";
export const FETCH_DIRECTIONS_SUCCESS = "FETCH_DIRECTIONS_SUCCESS";
export const FETCH_DIRECTIONS_ERROR = "FETCH_DIRECTIONS_ERROR";

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

function fetchDirectionsSuccess(directions: any) {
  return {
    type: FETCH_DIRECTIONS_SUCCESS,
    directions,
  };
}

export function fetchDirections() {
  return function (dispatch: any) {
    return axios({
      method: "get",
      url: "http://localhost:8000/directions",
    }).then(
      (directions: any) => dispatch(fetchDirectionsSuccess(directions.data)),
      (error: Error) => dispatch(fetchDirectionsError(error))
    );
  };
}

export default {
  fetchDirections,
  fetchDirectionsError,
};
