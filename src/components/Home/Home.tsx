import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router";

export type OwnProps = {};

export type Props = RouteComponentProps & OwnProps;

const Home: React.FC<OwnProps> = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const onWhereFromChange = (value: string) => setFrom(value);
  const onWhereToChange = (value: string) => setTo(value);

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        label="Where from?"
        variant="filled"
        onChange={(event) => onWhereFromChange(event.currentTarget.value)}
      />
      <TextField
        id="filled-basic"
        label="Where to?"
        variant="filled"
        onChange={(event) => onWhereToChange(event.currentTarget.value)}
      />
      <Link to="/directions">
        <Button variant="contained" color="primary" type="submit">
          Go!
        </Button>
      </Link>
    </form>
  );
};

export default withRouter(Home);
