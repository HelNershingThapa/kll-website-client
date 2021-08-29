import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // backgroundColor: "white",
  },
  wrapper: {
    // textTransform: "capitalize",
    // color: "#61758A",
    // fontSize: "0.89rem",
    // lineHeight: "0.89rem",
    // padding: 0,
  },
  tabLabel: {
    padding: 0,
    textTransform: "capitalize",
    color: "#61758A",
    fontSize: "0.89rem",
    lineHeight: "0.89rem",
    padding: 0,
  },
  selected: {
    fontWeight: 600,
    color: "#2D4CDB",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Recent Posts");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
        textColor="primary"
        TabIndicatorProps={{
          style: {
            height: "3px",
            background: "#2D4CDB",
          },
        }}
      >
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          label={
            <span
              className={clsx(
                classes.tabLabel,
                value === "Recent Posts" && classes.selected
              )}
            >
              Recent Posts
            </span>
          }
          value="Recent Posts"
          {...a11yProps(0)}
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          label={
            <span
              className={clsx(
                classes.tabLabel,
                value === "Popular" && classes.selected
              )}
            >
              Popular
            </span>
          }
          value="Popular"
          {...a11yProps(1)}
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          label={
            <span
              className={clsx(
                classes.tabLabel,
                value === "Earthquake" && classes.selected
              )}
            >
              Earthquake
            </span>
          }
          value="Earthquake"
          {...a11yProps(2)}
        />
        <Tab
          classes={{ wrapper: classes.wrapper, selected: classes.selected }}
          label={
            <span
              className={clsx(
                classes.tabLabel,
                value === "Sustainability" && classes.selected
              )}
            >
              Sustainability
            </span>
          }
          value="Sustainability"
          {...a11yProps(2)}
        />
      </Tabs>
    </div>
  );
}
