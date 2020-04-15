const SAVE_FROM_AND_TO = "SAVE_FROM_AND_TO";

function saveFromAndTo(from: string, to: string) {
  console.log("from", from);
  console.log("to", to);
  return {
    type: SAVE_FROM_AND_TO,
    from,
    to,
  };
}

export { SAVE_FROM_AND_TO };
export default { saveFromAndTo };
