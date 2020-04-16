import "./Home.scss";

import Button from "@material-ui/core/Button";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DirectionsTransitIcon from "@material-ui/icons/DirectionsTransit";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import HomeActions from "./HomeActions";
import { Link } from "react-router-dom";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TRANSPORT_TYPE } from "./types";
import TextField from "@material-ui/core/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// TODO: LOGIG
// YOU SELECT ON THE ICONS AND SETS UP THE WAY YOU DRIVE -> STATE -> ONCLICK=> SEND IT TO THE STORE
// FROM AND WHEERE HOW TO GET THE COORDS
interface Props extends RouteComponentProps {
  HomeActions: typeof HomeActions;
}
interface State {
  from: string;
  to: string;
  transportType: TRANSPORT_TYPE;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      from: "",
      to: "",
      transportType: TRANSPORT_TYPE.DRIVING,
    };
  }

  onWhereFromChange = (value: string) => this.setState({ from: value });

  onWhereToChange = (value: string) => this.setState({ to: value });

  onTransportTypeSelect = (transport: TRANSPORT_TYPE) =>
    this.setState({ transportType: transport });

  handleSubmit = () => {
    this.props.HomeActions.saveFromAndTo(
      this.state.from,
      this.state.to,
      this.state.transportType
    );
  };

  render() {
    return (
      <form noValidate autoComplete="off" className="form">
        <div className="form-directions-text-fields">
          <TextField
            id="filled-basic"
            label="Where from?"
            variant="filled"
            onChange={(event) =>
              this.onWhereFromChange(event.currentTarget.value)
            }
          />
          <TextField
            id="filled-basic"
            label="Where to?"
            variant="filled"
            onChange={(event) =>
              this.onWhereToChange(event.currentTarget.value)
            }
          />
        </div>
        <div className="form-directions-icons">
          <DriveEtaIcon
            onClick={() => this.onTransportTypeSelect(TRANSPORT_TYPE.DRIVING)}
          />
          <DirectionsTransitIcon
            onClick={() => this.onTransportTypeSelect(TRANSPORT_TYPE.DRIVING)}
          />
          <DirectionsWalkIcon
            onClick={() => this.onTransportTypeSelect(TRANSPORT_TYPE.WALKING)}
          />
          <DirectionsBikeIcon
            onClick={() => this.onTransportTypeSelect(TRANSPORT_TYPE.CYCLING)}
          />
        </div>
        <div className="form-button">
          <Link to="/directions">
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Go!
            </Button>
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  HomeActions: bindActionCreators(HomeActions, dispatch),
});

export default connect(null, mapDispatchToProps)(withRouter(Home));
