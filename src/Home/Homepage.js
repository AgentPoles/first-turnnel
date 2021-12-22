import React, { useEffect, useContext, useState } from "react";
import { Typography } from "@material-ui/core";
import { colors } from "../Assets/colors";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Avatar } from "@material-ui/core";
import Kabura from "../Assets/images/kabura.jpeg";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Badge } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchComponent from "./Search/Index";
import turnnel from "../Assets/images/turnnel.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    top: "auto",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    left: 0,
    right: 0,
    margin: "0 auto",
    // backgroundColor: colors.grey_variantB_color,
    padding: "0.2rem",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
}));
export const SearchContext = React.createContext();
let searched = "";
const Homepage = () => {
  const classes = useStyles();
  const [searched, setSearched] = useState({
    TOKEN_NAME: "",
    WALLET_ADDRESS: "",
  });
  return (
    <SearchContext.Provider value={[searched, setSearched]}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header className={classes.root}>
          <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar variant="dense">
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                style={{ marginLeft: "auto" }}
              >
                <Badge badgeContent={4} color="secondary" invisible={true}>
                  <NotificationsActiveOutlinedIcon
                    fontSize="small"
                    style={{ color: colors.main_color }}
                  />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary" invisible={true}>
                  <HelpOutlineIcon
                    fontSize="small"
                    style={{ color: colors.main_color }}
                  />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary" invisible={true}>
                  <AppsIcon
                    fontSize="small"
                    style={{ color: colors.main_color }}
                  />
                </Badge>
              </IconButton>
              <Avatar src={Kabura} alt="host icon" />
            </Toolbar>
          </AppBar>
        </header>
        <div className={classes.section}>
          <img
            src={turnnel}
            alt="turnnel logo"
            style={{ maxWidth: 250, marginBottom: "1rem" }}
          />
          <SearchComponent />
        </div>
        <footer>
          <div className={classes.footer}>
            <Copyright />
          </div>
        </footer>
      </div>
    </SearchContext.Provider>
  );
};

function Copyright() {
  return (
    <div>
      <Typography
        variant="body2"
        align="center"
        style={{ color: colors.grey_writing_color }}
      >
        {" nada es imposible para dios © "}
        <Link color="inherit" href="https://material-ui.com/"></Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}

export default Homepage;
