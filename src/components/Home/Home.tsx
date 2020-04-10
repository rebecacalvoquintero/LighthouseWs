import React, { useState } from "react";

import Button from "@material-ui/core/Button";
// import { RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

export type OwnProps = {};

// export type Props = RouteComponentProps & OwnProps;

// className={classes.root}
const Home: React.FC<OwnProps> = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <form noValidate autoComplete="off">
      <TextField id="filled-basic" label="Where from?" variant="filled" />
      <TextField id="filled-basic" label="Where to?" variant="filled" />
      <Button variant="contained" color="primary" type="submit">
        Go!
      </Button>
    </form>
  );
};

export default Home;
