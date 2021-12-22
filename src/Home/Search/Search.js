import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { colors } from "../../Assets/colors";
import { Box, Input } from "@material-ui/core";
import Chain from "./chain";
import { SearchContext } from "../Homepage";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import DnsIcon from "@material-ui/icons/Dns";
import TimerIcon from "@material-ui/icons/Timer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-around",
    width: "80vw",
    maxWidth: 600,

    borderColor: colors.main_color,
    borderRadius: 30,
  },
  roote: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80vw",
    maxWidth: 600,
    borderColor: colors.main_color,
    borderRadius: 30,
    flexDirection: "column",
  },
  inputA: {
    marginLeft: theme.spacing(1),
    flexBasis: "100%",
  },
  otherInputs: {
    marginLeft: theme.spacing(1),
    flexGrow: "1",
    maxWidth: 70,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
    color: colors.main_color,
  },

  dividerh: {
    width: "80%",
    margin: 4,
    color: colors.main_color,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function Search({ onSearched }) {
  const classes = useStyles();
  const [searched, setSearched] = useContext(SearchContext);
  const [clicked, setClicked] = useState(false);
  const defaultProps = {
    border: 1.5,
    m: 1,
  };

  let handleClick = (e) => {
    e.preventDefault();
    onSearched();
    setClicked(!clicked);
    console.log(clicked);
  };

  const handleChange = (e) => {
    setSearched({ [e.target.name]: e.target.value });
  };
  return (
    <Box className={classes.root} border={1.5}>
      {/* <div component="form" className={classes.root} elevation={0}> */}
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={(e) => handleClick(e)}
        style={{ color: colors.main_color }}
      >
        <SearchIcon />
      </IconButton>
      {/* <DnsIcon fontSize="small" color="secondary" /> */}

      <InputBase
        className={classes.otherInputs}
        placeholder="TOKEN"
        value={""}
        name="TOKEN_NAME"
        onChange={(e) => {
          // handleChange(e);
        }}
        inputProps={{ "aria-label": "search transactions" }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.inputA}
        placeholder="wallet address"
        value={searched.WALLET_ADDRESS}
        onChange={(e) => {
          handleChange(e);
        }}
        name="WALLET_ADDRESS"
        inputProps={{ "aria-label": "search transactions" }}
      />
      <IconButton>
        <TimerIcon color="secondary" />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Chain />
      {/* </div> */}
      {/* <Divider className={classes.divider} orientation="horizontal" /> */}
    </Box>
  );
}
