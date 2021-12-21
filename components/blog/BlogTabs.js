import React, { useEffect } from "react";
import { uid } from "react-uid";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const categories = [
  {
    label: "Recent Posts",
    value: "none",
  },
  {
    label: "Sustainability",
    value: "sustainability",
  },
  {
    label: "Disaster",
    value: "disaster",
  },
  {
    label: "Community",
    value: "community",
  },
  {
    label: "Governance",
    value: "governance",
  },
];

const searchCategories = [
  {
    label: "Relevant",
    value: "relevant",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
];

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
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
    },
  },
  tabRoot: {
    color: theme.palette.grey[500],
    textTransform: "capitalize",
    fontSize: "0.8889rem",
    lineHeight: "0.8889rem",
    fontWeight: 500,
  },
  selected: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
}));

export default function SimpleTabs({
  category,
  setCategory,
  setBlogs,
  loadFunc,
  searchQuery,
}) {
  const classes = useStyles();

  useEffect(() => {
    setBlogs([]);
    loadFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  const activeCategories = searchQuery ? searchCategories : categories;

  return (
    <div className={classes.root}>
      <Tabs
        variant="scrollable"
        value={category}
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
        {activeCategories.map((category, index) => (
          <Tab
            key={uid(category, index)}
            classes={{
              root: classes.tabRoot,
              selected: classes.selected,
            }}
            label={category.label}
            value={category.value}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </div>
  );
}
