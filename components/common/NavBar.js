import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import axios from "axios";
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
import Tooltip from "@material-ui/core/Tooltip";
import { desktop, primary } from "../../styles/theme";
import logo from "public/kll-logo.svg";
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import RichTooltip from "./RichTooltip";
import PopoverContent from "./PopoverContent";
import MobileMenuDrawer from "./MobileMenuDrawer";
import CollapseNavBar from "./CollapseNavBar";
import { useEffect } from "react";

const menuItems = [
  {
    name: "Who we are",
    link: "/whoweare",
    isSubMenuAvailable: true,
    identifier: "whoweare",
    subMenu: [
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Our Team",
        link: "/our-team",
      },
    ],
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
    isSubMenuAvailable: true,
    identifier: "insights",
    subMenu: [
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "In the Media",
        link: "/in-the-media",
      },
      {
        name: "Events",
        link: "/events",
      },
    ],
  },
  {
    name: "Get Involved",
    link: "/get-involved",
    isSubMenuAvailable: true,
    identifier: "get-involved",
    subMenu: [
      {
        name: "Work with Us",
        link: "/work-with-us",
      },
      {
        name: "Join the OSM Movement",
        link: "/resources",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#ffffff",
    height: "80px",
    display: "flex",
    justifyContent: "center",
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
    height: 40,
    width: 40,
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
    [theme.breakpoints.down(desktop)]: {
      fontSize: "0.8889rem",
    },
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
    lineHeight: 1,
  },
  noDecoration: {
    textDecoration: "none",
  },
  menuItemsContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(15),
    [theme.breakpoints.down(desktop)]: {
      gap: theme.spacing(10),
    },
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

  const [menu, setMenu] = useState([]);
  const [mobileMenuDrawerOpen, setOpen] = useState(false);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const { API_URL } = process.env;
    axios.get(`${API_URL}/navigation-bar`).then((res) => {
      const menuRes = res.data.menu;
      setMenu(menuRes);
    });
  }, []);

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

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Fragment>
      <AppBar position="sticky" elevation={0} className={classes.appBar}>
        <Toolbar disableGutters>
          <Container
            fixed
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className={classes.title}>
              <Link href="/" passHref>
                <div className={classes.imgFill}>
                  <Image
                    priority
                    src="/kll-logos/kll-logo-default.svg"
                    layout="fill"
                    objectFit="cover"
                    alt="KLL Logo"
                    sizes="48px"
                  />
                </div>
              </Link>
            </div>

            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleChange}
                aria-label="Open Navigation"
              >
                {checked ? (
                  <i className={clsx("ri-close-line", classes.menuIcon)} />
                ) : (
                  <i className={clsx("ri-menu-line", classes.menuIcon)} />
                )}
              </IconButton>
            </Hidden>

            <Hidden smDown>
              <div className={classes.menuItemsContainer}>
                {menu.map((menuItem, index) => (
                  <Fragment key={uid(menuItem, index)}>
                    {menuItem.subMenu.length > 0 ? (
                      <RichTooltip
                        content={
                          <PopoverContent
                            identifier={menuItem.identifier}
                            menu={menu}
                          />
                        }
                        open={openedPopoverId === index}
                        placement="bottom-start"
                        onClose={() => setPopoverOpen(false)}
                        handlePopoverOpen={handlePopoverOpen}
                        popoverLeave={() => setOpenedPopoverId(null)}
                        index={index}
                        setOpenedPopoverId={setOpenedPopoverId}
                        setOpen={handlePopoverOpen}
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
                            {menuItem.subMenu.length > 0 && (
                              <i className="ri-arrow-down-s-line" />
                            )}
                          </Typography>
                        </div>
                      </RichTooltip>
                    ) : (
                      <Link href={menuItem.link} passHref>
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
                  </Fragment>
                ))}
                <Button
                  className={classes.contactUs}
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/contact-us")}
                >
                  Contact Us
                </Button>
              </div>
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
      {/* <MobileMenuDrawer open={mobileMenuDrawerOpen} onClose={onClose} menuItems={menuItems} /> */}
      {checked && (
        <CollapseNavBar
          checked={checked}
          menuItems={menuItems}
          handleChange={handleChange}
        />
      )}
    </Fragment>
  );
}
export default NavBar;
