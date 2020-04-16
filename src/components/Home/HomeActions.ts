import { TRANSPORT_TYPE } from "./types";

const SAVE_FROM_AND_TO = "SAVE_FROM_AND_TO";

function saveFromAndTo(
  from: string,
  to: string,
  transportType: TRANSPORT_TYPE
) {
  return {
    type: SAVE_FROM_AND_TO,
    from,
    to,
    transportType,
  };
}

export { SAVE_FROM_AND_TO };
export default { saveFromAndTo };
