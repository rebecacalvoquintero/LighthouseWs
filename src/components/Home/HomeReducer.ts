import { SAVE_FROM_AND_TO } from "./HomeActions";
import { TRANSPORT_TYPE } from "./types";
import { fromJS } from "immutable";

const initialState = fromJS({
  from: "",
  to: "",
  transportType: TRANSPORT_TYPE.DRIVING,
});

export default function HomeReducer(state = initialState, action: any) {
  switch (action.type) {
    case SAVE_FROM_AND_TO:
      console.log("type", action.transportType);
      return state.merge({
        from: action.from,
        to: action.to,
        transportType: action.transportType,
      });

    default:
      return state;
  }
}
