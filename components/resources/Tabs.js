import React from "react";
import PropTypes from "prop-types";
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
  },
  selected: {
    background: "#E8EFFC",
  },
  indicator: {
    left: "0px",
    width: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
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
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textColorPrimary: {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "18px",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        classes={{
          indicator: classes.indicator,
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
