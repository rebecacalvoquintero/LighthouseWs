import DirectionActions from "./DirectionsActions";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// before it renders the page it should call the endpoint directions
// wait for the response
// populate the store with the response

interface Props {
  DirectionActions: typeof DirectionActions;
}
interface State {
  directions: JSON;
}

class Directions extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      directions: JSON.parse(""),
    };
  }

  componentDidMount() {
    // call the endpoint directions
    // DirectionActions.fetchDirections();
  }
  render() {
    return <div>Hello</div>;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  DirectionActions: bindActionCreators(DirectionActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Directions);
