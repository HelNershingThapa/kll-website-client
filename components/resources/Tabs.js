import React from "react";
import PropTypes from "prop-types";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    marginTop: theme.spacing(8),
    // borderLeft: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
    },
  },
  selected: {
    background: "#E8EFFC",
    [theme.breakpoints.down("xs")]: {
      background: "none",
    },
  },
  indicator: {
    left: "0px",
    width: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      height: "4px",
    },
  },
  tabRoot: {
    width: 290,
    padding: "15px 19px",
    textTransform: "none",
    marginBottom: "18px",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "18px",
    color: theme.palette.grey[500],
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: "7px 8px",
      marginBottom: 0,
    },
  },
  tabWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textColorPrimary: {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: 700,
    },
  },
  tabsFlexContainer: {
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(6),
    },
  },
}));

function VerticalTabs({ width, value, setValue }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabOrientation = isWidthUp("sm", width) ? "vertical" : "horizontal";

  console.log("tabOrientation", tabOrientation);

  return (
    <div className={classes.root}>
      <Tabs
        orientation={tabOrientation}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        classes={{
          indicator: classes.indicator,

          flexContainer: classes.tabsFlexContainer,
        }}
        textColor="primary"
      >
        <Tab
          label="OpenStreetMap"
          {...a11yProps(0)}
          classes={{
            root: classes.tabRoot,
            wrapper: classes.tabWrapper,
            selected: classes.selected,
            textColorPrimary: classes.textColorPrimary,
          }}
        />
        <Tab
          label="Application"
          {...a11yProps(1)}
          classes={{
            root: classes.tabRoot,
            wrapper: classes.tabWrapper,
            textColorPrimary: classes.textColorPrimary,
            selected: classes.selected,
          }}
        />
        <Tab
          label="Tools"
          {...a11yProps(2)}
          classes={{
            root: classes.tabRoot,
            wrapper: classes.tabWrapper,
            textColorPrimary: classes.textColorPrimary,
            selected: classes.selected,
          }}
        />
      </Tabs>
    </div>
  );
}

export default withWidth()(VerticalTabs);
