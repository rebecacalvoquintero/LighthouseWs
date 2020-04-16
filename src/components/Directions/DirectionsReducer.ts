import { RECEIVE_DIRECTIONS } from "./DirectionsActions";
import { fromJS } from "immutable";

const initialState = fromJS({
  directions: null,
});

export default function DirectionsReducer(state = initialState, action: any) {
  switch (action.type) {
    case RECEIVE_DIRECTIONS:
      console.log("directions reducers", action.directions);
      return state.set("directions", action.directions);

    default:
      return state;
  }
}
