import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { SearchContext } from "../Homepage";
import { Box } from "@material-ui/core";
import { colors } from "../../Assets/colors";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80vw",
    maxWidth: 600,
    borderColor: colors.main_color,

    zIndex: 2000,
  },
  cells: {
    paddingLeft: 30,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default function Receipt({ balance }) {
  const classes = useStyles();

  return (
    <Box
      borderBottom={1.5}
      borderLeft={1.5}
      borderRight={1.5}
      className={classes.root}
    >
     
    </Box>
  );
}
