import DirectionActions from "./DirectionsActions";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

interface Props {
  DirectionActions: typeof DirectionActions;
  DirectionsReducer: any;
}

class Directions extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.DirectionActions.fetchDirections();
  }
  render() {
    if (this.props.DirectionsReducer) {
      console.log("directions", this.props.DirectionsReducer.get("directions"));
    }

    return <div>Hello</div>;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  DirectionActions: bindActionCreators(DirectionActions, dispatch),
});

const mapStateToProps = (state: any) => ({
  DirectionsReducer: state.DirectionsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
