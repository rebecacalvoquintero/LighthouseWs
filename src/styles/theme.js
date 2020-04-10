import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/purple";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
