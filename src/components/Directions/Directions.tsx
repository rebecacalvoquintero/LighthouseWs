import DirectionActions from "./DirectionsActions";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

interface Props {
  DirectionActions: typeof DirectionActions;
  DirectionsReducer: any;
  HomeReducer: any;
}

class Directions extends React.PureComponent<Props> {
  componentDidMount() {
    console.log("home", this.props.HomeReducer.get("transportType"));
    this.props.DirectionActions.fetchDirections(
      this.props.HomeReducer.get("transportType")
    );
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
  HomeReducer: state.HomeReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
