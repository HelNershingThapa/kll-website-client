import React, { useState, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import axios from "axios";
import { uid } from "react-uid";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { desktop, primary } from "../../styles/theme";
import RichTooltip from "./RichTooltip";
import PopoverContent from "./PopoverContent";
import CollapseNavBar from "./CollapseNavBar";
// const RichTooltip = dynamic(() => import("./RichTooltip"));
// const PopoverContent = dynamic(() => import("./PopoverContent"));
// const CollapseNavBar = dynamic(() => import("./CollapseNavBar"));

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
  appBarScrolled: {
    // backgroundColor: "#211A5A",
    borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },
}));

function NavBar({}) {
  const classes = useStyles();
  const router = useRouter();

  const [menu, setMenu] = useState([]);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [checked, setChecked] = React.useState(false);

  // triggered when scroll is not at the top
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const { API_URL } = process.env;
    axios.get(`${API_URL}/navigation-bar`).then((res) => {
      const menuRes = res.data.menu;
      setMenu(menuRes);
    });
  }, []);

  const handlePopoverOpen = (popoverId) => {
    setOpenedPopoverId(popoverId);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Fragment>
      <AppBar
        position="sticky"
        elevation={0}
        className={clsx(
          classes.appBar,
          trigger === false || checked ? "" : classes.appBarScrolled
        )}
      >
        <Toolbar disableGutters>
          <Container
            fixed
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className={classes.title}>
              <Link href="/" passHref>
                <div
                  className={classes.imgFill}
                  role="button"
                  onClick={() => setChecked(false)}
                >
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
      <CollapseNavBar
        checked={checked}
        menuItems={menu}
        handleChange={handleChange}
      />
    </Fragment>
  );
}
export default NavBar;
