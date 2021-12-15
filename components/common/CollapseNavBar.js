import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import clsx from "clsx";
import Image from "next/image";
import { uid } from "react-uid";
import Link from "next/link";
import {
  Drawer,
  Container,
  Toolbar,
  List,
  IconButton,
  Typography,
  Backdrop,
} from "@material-ui/core";
import { Fragment } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  drawer: {
    position: "fixed",
    zIndex: "1300",
    inset: "0px",
  },
  root: {
    height: "100vh",
    position: "fixed",
    top: 80,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1300,
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      top: 64,
    },
  },
  container: {
    display: "flex",
  },
  paper: {
    // margin: theme.spacing(1),
    width: "100%",
    zIndex: 1200,
    height: "100vh",
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
  title: {
    fontWeight: 200,
    lineHeight: 1.25,
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(8),
  },
  noDecoration: {
    textDecoration: "none",
  },
  menuItemContainerMobile: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    padding: "10px",
    background: theme.palette.grey[100],
    borderRadius: "12px",
  },
  menuIcon: {
    fontSize: "20px",
    color: theme.palette.grey[600],
  },
  menuItem: {
    fontWeight: 600,
    lineHeight: 1.6,
  },
  menuItemLink: {
    fontWeight: 600,
    lineHeight: 1.6,
    "&:hover": {
      cursor: "pointer",
    },
  },
  subMenuCtr: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  subMenuItemTypo: {
    fontFamily: "Manrope",
    fontWeight: 500,
    color: theme.palette.grey[500],
    margin: theme.spacing(0, 8),
    "&:hover": {
      cursor: "pointer",
    },
  },
  arrowRight: {
    fontSize: "18px",
    color: theme.palette.grey[500],
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function SimpleCollapse({
  checked,
  handleChange,
  setChecked,
  menuItems,
}) {
  const classes = useStyles();

  useEffect(() => {
    console.log("checked", checked);
    if (checked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [checked]);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = "visible";
    };
  });

  return (
    <div className={classes.root}>
      <Collapse in={checked}>
        <Paper elevation={0} className={classes.paper}>
          <Container fixed>
            <Typography variant="h4" className={classes.title}>
              Website Menu
            </Typography>
            <div className={classes.menuItemContainerMobile}>
              {menuItems.map((menuItem) => (
                <Fragment key={uid(menuItem)}>
                  {menuItem.subMenu.length > 0 ? (
                    <div className={classes.subMenuCtr}>
                      <Typography variant="h6" className={classes.menuItem}>
                        {menuItem.name}
                      </Typography>
                      {menuItem.subMenu.map((subMenu) => (
                        <div key={uid(subMenu)}>
                          <Link
                            href={subMenu.link}
                            className={classes.link}
                            passHref
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                variant="body1"
                                className={classes.subMenuItemTypo}
                                onClick={handleChange}
                              >
                                {subMenu.name}
                              </Typography>
                              <i
                                className={clsx(
                                  "ri-arrow-right-line",
                                  classes.arrowRight
                                )}
                                onClick={handleChange}
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={uid(menuItem)}
                      href={menuItem.link}
                      className={classes.link}
                      passHref
                    >
                      <Typography
                        variant="h6"
                        className={classes.menuItemLink}
                        onClick={handleChange}
                      >
                        {menuItem.name}
                      </Typography>
                    </Link>
                  )}
                </Fragment>
              ))}
            </div>
          </Container>
        </Paper>
      </Collapse>
    </div>
  );
}
