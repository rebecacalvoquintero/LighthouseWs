import { SAVE_FROM_AND_TO } from "./HomeActions";
import { fromJS } from "immutable";

const initialState = fromJS({
  from: "",
  to: "",
});

export default function HomeReducer(state = initialState, action: any) {
  console.log("Action", action.type);
  switch (action.type) {
    case SAVE_FROM_AND_TO:
      return state.merge({ from: action.from, to: action.to });

    default:
      return state;
  }
}
