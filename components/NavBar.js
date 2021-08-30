import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";

import clsx from "clsx";
import { uid } from "react-uid";
import Link from "next/link";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import { primary } from "../styles/theme";
import logo from "public/kll-logo.svg";
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const menuItems = [
  {
    name: "Who we are",
    link: "/whoweare",
  },
  {
    name: "Impact",
    link: "/impact",
  },
  {
    name: "Showcase",
    link: "/showcase",
  },
  {
    name: "Insights",
    link: "/insights",
  },
  {
    name: "Get Involved",
    link: "/get-involved",
  },
];

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "400",
    lineHeight: "1rem",
  },
  homeBtn: {
    color: "#171512",
    textTransform: "capitalize",
    fontWeight: "400",
  },
  buttonMobile: {
    color: "black",
    textTransform: "capitalize",
  },
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  headSection: {
    width: 200,
  },
  blackList: {
    height: "100%",
  },
  menuLink: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  noDecoration: {
    textDecoration: "none",
  },
  menuItemsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
  },
  menuItemContainerMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    alignItems: "center",
  },
  projectTitle: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  activeLink: {
    color: primary,
    fontWeight: "600",
    // textDecoration: 'underline',
  },
  contactUs: {
    padding: "12px 24px",
    lineHeight: "0.89rem",
    fontSize: "0.89rem",
  },
}));

function NavBar({}) {
  const classes = useStyles();
  const location = useRouter();

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const isHomePage = location.pathname === "/";

  const isActiveLink = (url) => {
    const splitLocation = location.pathname.split("/");
    const splitUrl = url.split("/");
    if (splitLocation[1] === splitUrl[1]) return true;
    return false;
  };

  return (
    <Fragment>
      <Container maxWidth="lg">
        <AppBar
          position="static"
          elevation={0}
          style={{
            background: "#ffffff",
            height: "80px",
          }}
        >
          <Toolbar style={{ height: "100%", paddingLeft: 0, paddingRight: 0, display: 'flex', justifyContent: 'space-between' }}>
            <div className={classes.title}>
              <Link href="/">
                <div style={{ cursor: "pointer" }}>
                  <Image
                    src={logo}
                    height={46}
                    width={42}
                    alt="Picture of the author"
                  />
                </div>
              </Link>
            </div>

            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={() => setOpen(true)}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>

            <Hidden smDown>
              <div className={classes.menuItemsContainer}>
                {menuItems.map((menuItem) => (
                  <Link key={uid(menuItem)} href={menuItem.link}>
                    <a className={classes.menuLink}>{menuItem.name}</a>
                  </Link>
                ))}
                <Button
                  className={classes.contactUs}
                  disableElevation
                  variant="contained"
                  color="primary"
                  style={{ textTransform: "none" }}
                >
                  Contact Us
                </Button>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Container>
      <Drawer variant="temporary" open={open} onClose={onClose} anchor="right">
        <Toolbar className={classes.headSection}>
          <ListItem disableGutters>
            <ListItemIcon className={classes.closeIcon}>
              <IconButton onClick={onClose} aria-label="Close Navigation">
                <CloseIcon color="primary" />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </Toolbar>
        <List className={classes.blackList}>
          <div className={classes.menuItemContainerMobile}>
            {menuItems.map((menuItem) => (
              <Link
                key={uid(menuItem)}
                href={menuItem.link}
                className={classes.noDecoration}
              >
                {menuItem.name}
              </Link>
            ))}
          </div>
        </List>
      </Drawer>
    </Fragment>
  );
}
export default NavBar;
