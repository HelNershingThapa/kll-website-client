import { useState } from "react";
import { uid } from "react-uid";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Hidden } from "@material-ui/core/";
import Tabs from "components/resources/Tabs";
import ResourceCard from "components/resources/ResourceCard";

const tabLabels = {
  openStreetMap: "OpenStreetMap",
  application: "Application",
  tools: "Tools",
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(23),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(10),
    },
  },
  pageTitle: {
    lineHeight: 1.25,
  },
  items: {
    display: "flex",
    gap: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(4),
    },
  },
  resources: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "19px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      rowGap: theme.spacing(6),
    },
  },
  optionTitle: {
    lineHeight: 1,
    color: theme.palette.grey[700],
    marginBottom: "38px",
    marginTop: "13px",
  },
}));



function Resources({ resources }) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("openStreetMap");

  console.log("resources", resources);

  return (
    <>
      <Head>
        <title>Resources | Kathmandu Living Labs</title>
      </Head>
      <div className={classes.container}>
        <Container fixed>
          <div className={classes.items}>
            <div>
              <Typography variant="h4" className={classes.pageTitle}>
                Resources
              </Typography>
              <Tabs value={tabValue} setValue={setTabValue} />
            </div>
            <div>
              <Hidden smDown>
                <Typography variant="h6" className={classes.optionTitle}>
                  {`/${tabLabels[tabValue]}`}
                </Typography>
              </Hidden>
              <div className={classes.resources}>
                {resources[tabValue].map((resource) => (
                  <ResourceCard key={uid(resource)} resource={resource} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/resources`);
  const resources = await res.json();

  return {
    props: {
      resources,
    },
  };
}

export default Resources;
