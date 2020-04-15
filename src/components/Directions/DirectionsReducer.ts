import { FETCH_DIRECTIONS, FETCH_DIRECTIONS_ERROR } from "./DirectionsActions";

import { Action } from "redux";

export default function (state = [], action: any) {
  switch (action.type) {
    case FETCH_DIRECTIONS:
      const directions = action.payload.data;
      return [...state, ...directions];

    default:
      return state;
  }
}
