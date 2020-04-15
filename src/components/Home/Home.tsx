import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import HomeActions from "./HomeActions";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

interface Props extends RouteComponentProps {
  HomeActions: typeof HomeActions;
}
interface State {
  from: string;
  to: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      from: "",
      to: "",
    };
  }

  onWhereFromChange = (value: string) => this.setState({ from: value });

  onWhereToChange = (value: string) => this.setState({ to: value });

  handleSubmit = () => {
    this.props.HomeActions.saveFromAndTo(this.state.from, this.state.to);
  };

  render() {
    return (
      <form noValidate autoComplete="off">
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
          onChange={(event) => this.onWhereToChange(event.currentTarget.value)}
        />
        <Link to="/directions">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Go!
          </Button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  HomeActions: bindActionCreators(HomeActions, dispatch),
});

export default connect(null, mapDispatchToProps)(withRouter(Home));
