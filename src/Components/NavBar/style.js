import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    AppBar: {
      background: "#FFFFFF",
      display: "flex",
      position: "static",
    },
    Boxbg1: {
      flexGrow: 1,
      background: red,
      display: "flex",
    },
    Boxbg2: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
});
export default useStyles;
