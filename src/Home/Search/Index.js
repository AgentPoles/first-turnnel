import React, { useState, useContext } from "react";
import Search from "./Search";
import Receipt from "./Receipt";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { SearchContext } from "../Homepage";
import { useMoralis } from "react-moralis";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(0),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Index = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [addressBalance, setAddressBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [searched, setSearched] = useContext(SearchContext);

  const {
    Moralis,
    login,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    isWeb3Enabled,
    enableWeb3,
    web3EnableError,
  } = useMoralis();

  const handleChange = () => {
    setChecked((prev) => !prev);
    getAddressBalance(searched.WALLET_ADDRESS, Moralis.Web3, setAddressBalance);
  };

  let getAddressBalance = async (address, moralis_command, the_setter) => {
    try {
      console.log("getting user balance");
      let options = { address: address };
      let { balance } = await moralis_command.getERC20(options);
      the_setter(balance / 10 ** 18);
      console.log(addressBalance);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  if (checked) {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          style={{ alignSelf: "center" }}
          onSearched={() => {
            handleChange();
          }}
        />

        <div className={classes.root}>
          <div>
            <Grow in={checked}>
              <Box className={classes.paper}>
                <Receipt balance={addressBalance} />
              </Box>
            </Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          style={{ alignSelf: "center" }}
          onSearched={() => {
            handleChange();
          }}
        />
        <div className={classes.root}>
          <div>
            {/* <Grow in={checked}>
              <Paper elevation={4} className={classes.paper}>
                <Receipt />
              </Paper>
            </Grow> */}
            {/* Conditionally applies the timeout prop to change the entry speed. */}
          </div>
        </div>
      </section>
    );
  }
};
export default Index;
