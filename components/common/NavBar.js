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
import Tooltip from "@material-ui/core/Tooltip";
import { primary } from "../../styles/theme";
import logo from "public/kll-logo.svg";
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import RichTooltip from "./RichTooltip";
import PopoverContent from "./PopoverContent";

const menuItems = [
  {
    name: "Who we are",
    link: "/whoweare",
    subMenus: true,
    identifier: "whoweare",
  },
  {
    name: "Impact",
    link: "/our-projects",
  },
  {
    name: "Showcase",
    link: "/showcase",
  },
  {
    name: "Insights",
    link: "/insights",
    subMenus: true,
    identifier: "insights",
  },
  {
    name: "Get Involved",
    link: "/get-involved",
    subMenus: true,
    identifier: "get-involved",
  },
];

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#ffffff",
    height: "80px",
    [theme.breakpoints.down("xs")]: {
      height: "64px",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    padding: "10px",
    background: theme.palette.grey[100],
    borderRadius: "12px",
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
  menuItem: {
    fontWeight: 500,
    lineHeight: "18px",
    color: theme.palette.grey[900],
  },
  menuLink: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    gap: "12.23px",
    alignItems: "center",
    // "&:hover": {
    //   textDecoration: "underline",
    // },
  },
  menuIcon: {
    fontSize: "20px",
    color: theme.palette.grey[600],
  },
  noDecoration: {
    textDecoration: "none",
  },
  menuItemsContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(15),
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
    marginLeft: theme.spacing(5),
    padding: "12px 24px",
    fontSize: "16px",
    lineHeight: 1,
    fontWeight: 500,
  },
  imgFill: {
    cursor: "pointer",
    position: "relative",
    height: 48,
    width: 48,
    [theme.breakpoints.down("xs")]: {
      height: 40,
      width: 40,
    },
  },
  tooltip: {
    background: "#fff",
    borderRadius: "12px",
    padding: "24px 20px",
  },
}));

function NavBar({}) {
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const isHomePage = router.pathname === "/";

  const isActiveLink = (url) => {
    const splitLocation = router.pathname.split("/");
    const splitUrl = url.split("/");
    if (splitLocation[1] === splitUrl[1]) return true;
    return false;
  };

  const handlePopoverOpen = (popoverId) => {
    setOpenedPopoverId(popoverId);
  };

  return (
    <Fragment>
      <Container maxWidth="lg">
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar
            style={{
              height: "100%",
              paddingLeft: 0,
              paddingRight: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.title}>
              <Link href="/">
                <div className={classes.imgFill}>
                  <Image
                    src="/kll-logos/kll-logo-default.svg"
                    layout="fill"
                    objectFit="cover"
                    alt="KLL Logo"
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
                <i className={clsx("ri-menu-line", classes.menuIcon)}></i>
              </IconButton>
            </Hidden>

            <Hidden smDown>
              <div className={classes.menuItemsContainer}>
                {menuItems.map((menuItem, index) => (
                  <>
                    {menuItem.subMenus ? (
                      <RichTooltip
                        key={uid(menuItem)}
                        content={
                          <PopoverContent identifier={menuItem.identifier} />
                        }
                        open={openedPopoverId === index}
                        placement="bottom-start"
                        onClose={() => setPopoverOpen(false)}
                        handlePopoverOpen={handlePopoverOpen}
                        popoverLeave={() => setOpenedPopoverId(null)}
                        index={index}
                        setOpenedPopoverId={setOpenedPopoverId}
                      >
                        <div
                          style={{ display: "flex" }}
                          onMouseEnter={() => handlePopoverOpen(index)}
                          onMouseLeave={() => setOpenedPopoverId(null)}
                        >
                          <Typography
                            variant="body1"
                            className={classes.menuItem}
                            style={{
                              display: "flex",
                              gap: "8px",
                              alignItems: "center",
                            }}
                          >
                            {menuItem.name}
                            {menuItem.subMenus && (
                              <i className="ri-arrow-down-s-line" />
                            )}
                          </Typography>
                        </div>
                      </RichTooltip>
                    ) : (
                      <Link href={menuItem.link}>
                        <Typography
                          variant="body1"
                          className={classes.menuItem}
                          style={{
                            display: "flex",
                            gap: "12.23px",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          {menuItem.name}
                        </Typography>
                      </Link>
                    )}
                  </>
                ))}
                <Button
                  className={classes.contactUs}
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/contact-us")}
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
