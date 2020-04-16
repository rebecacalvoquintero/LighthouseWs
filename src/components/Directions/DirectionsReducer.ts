import { FETCH_DIRECTIONS_SUCCESS } from "./DirectionsActions";
import { fromJS } from "immutable";

const initialState = fromJS({
  directions: null,
});

export default function DirectionsReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_DIRECTIONS_SUCCESS:
      return state.set("directions", action.directions);

    default:
      return state;
  }
}
