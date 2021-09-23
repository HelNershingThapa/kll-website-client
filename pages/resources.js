import { uid } from "react-uid";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography } from "@material-ui/core/";
import Tabs from "components/resources/Tabs";
import ResourceCard from "components/resources/ResourceCard";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(23),
  },
  pageTitle: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: "40px",
    color: theme.palette.grey[900],
  },
  items: {
    display: "flex",
    gap: "32px",
  },
  resources: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "19px",
  },
  optionTitle: {
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "20px",
    color: theme.palette.grey[700],
    marginBottom: '38px',
    marginTop: '13px',

  },
}));

function Resources() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Resources | Kathmandu Living Labs</title>
      </Head>
      <div className={classes.container}>
        <Container>
          <div className={classes.items}>
            <div>
              <Typography variant="h4" className={classes.pageTitle}>
                Resources
              </Typography>
              <Tabs />
            </div>
            <div>
              <Typography className={classes.optionTitle}>{`/OpenStreetMap`}</Typography>
              <div className={classes.resources}>
                {["", "", ""].map((resource) => (
                  <ResourceCard key={uid(resource)} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Resources;
